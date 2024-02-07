import { Prisma } from '@prisma/client';
import { AuthorFiltersDto } from 'src/author/dto/author-filters-query.dto';
import { SortOrder } from '../enums';
import excludeWhenSortFields from '../constants/excludeWhenSortFields';

export const formAutrorWhereFromQuery = (authorQueryDto: AuthorFiltersDto) => {
  const where: Prisma.authorWhereInput = {};

  Object.keys(authorQueryDto).forEach((key) => {
    if (
      authorQueryDto[key] !== undefined &&
      !excludeWhenSortFields.includes(key) &&
      !Object.values(SortOrder).includes(authorQueryDto[key])
    ) {
      if (
        Array.isArray(authorQueryDto[key]) &&
        authorQueryDto[key].length > 1
      ) {
        // Проверяем, является ли массив пустым или содержит более одного элемента
        where[key] = { in: authorQueryDto[key] };
      } else {
        where[key] = { contains: authorQueryDto[key] };
      }
    }
  });

  return where;
};
