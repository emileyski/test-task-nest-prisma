import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'The name of the book',
    type: String,
    example: 'The Hobbit',
  })
  name: string;

  @ApiProperty({
    description: 'The id of the author',
    type: Number,
    example: 1,
  })
  authorId: number;

  @ApiProperty({
    description: 'The content of the book',
    type: String,
    example: 'In a hole in the ground there lived a hobbit.',
  })
  content: string;
}
