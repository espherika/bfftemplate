import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? PORT);
}
bootstrap();
