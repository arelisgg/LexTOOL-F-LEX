import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
//import { DtoValidationPipe } from './modules/shared/pipes/dto-validation.pipe';

const port = process.env.PORT || 10000;
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.useGlobalPipes(new DtoValidationPipe());
  app.enableCors();

  await app.listen(port);
  Logger.log(`Nest Server on http://localhost:${port}/graphql`, 'Bootstrap');

  if (module.hot) { 
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

