import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { memoryStorage } from "multer";
import { MinioController } from "./minio.controller";
import { MinioService } from "./minio.service";

@Module({
    imports: [
        MulterModule.register({
            storage: memoryStorage()
        })
    ],
    controllers: [MinioController],
    providers: [MinioService],
    exports: [MinioService]
})
export class MinioModule {}