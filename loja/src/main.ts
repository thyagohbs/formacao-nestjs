import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Para transformar o JSON
      whitelist: true, // ignorar todas as propriedades que vierem no JSON que não estiverem no DTO 
      forbidNonWhitelisted: true, // Para lançar um erro se alguém mandar um dado no JSON que não está no DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
