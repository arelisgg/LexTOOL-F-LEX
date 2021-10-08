import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client } from 'minio';
import {
  MINIO_ENDPOINT,
  MINIO_ACCESS_KEY,
  MINIO_SECRET_KEY,
} from './minio.config';

@Injectable()
export class MinioService implements OnModuleInit {
  private client: Client;

  constructor() {
    this.client = new Client({
      endPoint: MINIO_ENDPOINT,
      port: 9000,
      useSSL: false,
      accessKey: MINIO_ACCESS_KEY,
      secretKey: MINIO_SECRET_KEY,
    });
  }

  async getFile(name: string) {
    const img = await this.client.getObject('docs', name);
    return img;
  }

  async uploadFile(name: string, data: Buffer, size: number) {
    const obj = await this.client.putObject('docs', name, data, size);
    return obj;
  }

  async onModuleInit() {
    const docs = await this.client.bucketExists('docs');
    if (!docs) await this.client.makeBucket('docs', 'sgd');
  }
}
