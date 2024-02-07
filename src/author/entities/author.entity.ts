import { Prisma } from '@prisma/client';

export class Author implements Prisma.authorCreateInput {
  email: string;
  phoneNumber: string;
  surname: string;
  name: string;
}
