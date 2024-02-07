import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma.service';
import { Author } from './entities/author.entity';
import { PaginationResponse } from 'src/core/interfaces';
import { AuthorFiltersDto } from './dto/author-filters-query.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return this.prismaService.author.create({
      data: createAuthorDto,
    });
  }

  async findAll(
    authorFiltersDto: AuthorFiltersDto,
  ): Promise<PaginationResponse<Author>> {
    const { perPage, page } = authorFiltersDto;

    console.log(authorFiltersDto);

    const totalCount = await this.prismaService.author.count({});
    const totalPages = Math.ceil(totalCount / perPage);
    const currentPage = Math.min(Math.max(page, 1), totalPages); // Ограничиваем текущую страницу в пределах от 1 до totalPages

    const skip = (currentPage - 1) * perPage;

    const authors = await this.prismaService.author.findMany({
      skip,
      take: perPage,
    });

    return {
      data: authors,
      totalPages,
      totalItems: totalCount,
      currentPage,
      perPage: perPage,
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
