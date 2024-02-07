import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';
import { Author } from './entities/author.entity';
import { PaginationResponse } from 'src/core/interfaces';
import { AuthorFiltersDto } from './dto/author-filters-query.dto';
import { Prisma } from '@prisma/client';
import {
  formAuthorOrderByFromQuery,
  formAutrorWhereFromQuery,
} from 'src/core/utils';

@Injectable()
export class AuthorService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.prismaService.author.create({
      data: createAuthorDto,
    });
  }

  async findAll(
    authorQueryDto: AuthorFiltersDto,
  ): Promise<PaginationResponse<Author>> {
    const { limit = 10, page = 1 } = authorQueryDto;

    // The formAutrorWhereFromQuery and formAuthorOrderByFromQuery functions are used to form the where and orderBy options for the Prisma query
    const where = formAutrorWhereFromQuery(authorQueryDto);
    const orderBy = formAuthorOrderByFromQuery(authorQueryDto);

    const [totalCount, authors] = await Promise.all([
      this.prismaService.author.count({ where }),
      this.prismaService.author.findMany({
        where,
        orderBy,
        take: limit,
        skip: Math.max((page - 1) * limit, 0),
      }),
    ]);

    const totalPages = Math.ceil(totalCount / limit);
    const currentPage = Math.min(Math.max(page, 1), totalPages);

    return {
      data: authors,
      totalPages,
      totalItems: totalCount,
      currentPage,
      limit,
    };
  }

  findOne(id: number) {
    return this.prismaService.author.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        books: {
          select: {
            id: true,
            content: true,
            name: true,
          },
        },
      },
    });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.prismaService.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async remove(id: number): Promise<{ message: string }> {
    try {
      await this.prismaService.author.delete({
        where: { id },
      });
      return { message: `Author with id ${id} has been deleted` };
    } catch (e) {
      return { message: e.message };
    }
  }
}
