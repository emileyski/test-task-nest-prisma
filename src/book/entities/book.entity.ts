import { Prisma } from '@prisma/client';

export class Book implements Prisma.bookCreateInput {
  name: string;
  author: Prisma.authorCreateNestedOneWithoutBooksInput;
  content: string;
}
