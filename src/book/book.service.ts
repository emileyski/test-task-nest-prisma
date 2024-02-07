import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';
import { Book } from './entities/book.entity';
import { PaginationResponse } from 'src/core/interfaces';
import { BookFiltersDto } from './dto/book-filters-query.dto';
import {
  formBookOrderByFromQuery,
  formBookWhereFromQuery,
} from 'src/core/utils';

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

  async findAll(
    bookFiltersDto: BookFiltersDto,
  ): Promise<PaginationResponse<Book>> {
    const { limit = 10, page = 1, withAuthor, withContent } = bookFiltersDto;

    const where = formBookWhereFromQuery(bookFiltersDto);
    const orderBy = formBookOrderByFromQuery(bookFiltersDto);

    console.log('where', where);
    console.log('orderBy', orderBy);

    const [totalCount, books] = (await Promise.all([
      this.prismService.book.count({ where }),
      this.prismService.book.findMany({
        where,
        orderBy,
        take: limit,
        skip: Math.max((page - 1) * limit, 0),
        select: {
          id: true,
          name: true,
          content: withContent,
          author: withAuthor && {
            select: {
              id: true,
              name: true,
              phoneNumber: true,
              email: true,
              surname: true,
            },
          },
        },
      }),
    ])) as [number, Book[]];

    const totalPages = Math.ceil(totalCount / limit);
    const currentPage = Math.min(Math.max(page, 1), totalPages);

    return {
      data: books,
      totalPages,
      totalItems: totalCount,
      currentPage,
      limit,
    };
  }

  findOne(id: number) {
    return this.prismService.book.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        content: true,
        author: {
          select: {
            id: true,
            name: true,
            phoneNumber: true,
            email: true,
            surname: true,
          },
        },
      },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.prismService.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return this.prismService.book.delete({
      where: { id },
    });
  }
}
