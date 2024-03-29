import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthorController],
  providers: [
    AuthorService,
    PrismaService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: AuthorQueryTransformInterceptor,
    // },
  ],
})
export class AuthorModule {}
