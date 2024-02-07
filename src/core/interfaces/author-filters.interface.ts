import { ApiProperty } from '@nestjs/swagger';

export class AuthorFilters {
  @ApiProperty({
    example: 'John',
    description: 'The name of the Author',
  })
  name?: string | string[];
  email?: string | string[];
  surname?: string | string[];
  phoneNumbers?: string | string[];
}
