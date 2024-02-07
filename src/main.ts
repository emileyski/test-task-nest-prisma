import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Test task API')
    .setDescription('The Test task API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api/docs', app, document);

  const PORT = process.env.PORT || 3000;

  await app.listen(PORT);

  Logger.log(`⚙️ Server running on http://localhost:${PORT}`, 'Bootstrap');
  Logger.log(
    `📚 Swagger running on http://localhost:${PORT}/api/docs`,
    'Bootstrap',
  );
}
bootstrap();
