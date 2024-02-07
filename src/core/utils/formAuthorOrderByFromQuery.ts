import { Prisma } from '@prisma/client';
import { AuthorFiltersDto } from 'src/author/dto/author-filters-query.dto';
import { SortOrder } from '../enums';

export const formAuthorOrderByFromQuery = (
  authorQueryDto: AuthorFiltersDto,
) => {
  const orderBy: Prisma.authorOrderByWithRelationInput[] = [];

  Object.keys(authorQueryDto).forEach((key) => {
    if (Object.values(SortOrder).includes(authorQueryDto[key])) {
      const fieldName = key.replace('sortBy', '').toLowerCase();
      if (fieldName === 'phonenumber') {
        orderBy.push({
          phoneNumber: authorQueryDto[key],
        });
      } else {
        orderBy.push({
          [fieldName]: authorQueryDto[key],
        });
      }
    }
  });

  return orderBy;
};
