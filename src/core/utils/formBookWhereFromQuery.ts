import { BookFiltersDto } from 'src/book/dto/book-filters-query.dto';
import excludeWhenSortFields from '../constants/excludeWhenSortFields';
import { SortOrder } from '../enums';
import { Prisma } from '@prisma/client';

export const formBookWhereFromQuery = (bookQueryDto: BookFiltersDto) => {
  const where: Prisma.bookWhereInput = {};

  Object.keys(bookQueryDto).forEach((key) => {
    if (
      bookQueryDto[key] !== undefined &&
      !excludeWhenSortFields.includes(key) &&
      !Object.values(SortOrder).includes(bookQueryDto[key])
    ) {
      if (Array.isArray(bookQueryDto[key]) && bookQueryDto[key].length > 1) {
        // Проверяем, является ли массив пустым или содержит более одного элемента
        where[key] = { in: bookQueryDto[key] };
      } else {
        where[key] = { contains: bookQueryDto[key] };
      }
    }
  });

  return where;
};
