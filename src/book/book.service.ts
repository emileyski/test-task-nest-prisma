import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prismService: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    try {
      const book = await this.prismService.book.create({
        data: createBookDto,
      });

      return book;
    } catch (error) {
      return { error };
    }
  }

  findAll() {
    return `This action returns all book`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
