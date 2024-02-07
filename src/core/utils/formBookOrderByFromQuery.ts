import { Prisma } from '@prisma/client';
import { SortOrder } from '../enums';
import { BookFiltersDto } from 'src/book/dto/book-filters-query.dto';

export const formBookOrderByFromQuery = (bookQueryDto: BookFiltersDto) => {
  const orderBy: Prisma.bookOrderByWithRelationInput[] = [];

  Object.keys(bookQueryDto).forEach((key) => {
    if (Object.values(SortOrder).includes(bookQueryDto[key])) {
      const fieldName = key.replace('sortBy', '').toLowerCase();
      orderBy.push({
        [fieldName]: bookQueryDto[key],
      });
    }
  });

  return orderBy;
};
