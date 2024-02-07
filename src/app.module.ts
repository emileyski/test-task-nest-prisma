import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { AuthorQueryTransformInterceptor } from './core/interceptors/author-query-transform.interceptor';
import { BookModule } from './book/book.module';

@Module({
  imports: [AuthorModule, BookModule],
  controllers: [],
})
export class AppModule {}
