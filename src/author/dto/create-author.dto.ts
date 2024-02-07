import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({
    example: 'author@mail.com',
    description: 'The email of the Author',
    format: 'email',
  })
  email: string;

  @ApiProperty({
    example: '+1234567890',
    description: 'The phone number of the Author',
    format: 'phone',
  })
  phoneNumber: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The surname of the Author',
  })
  surname: string;

  @ApiProperty({
    example: 'John',
    description: 'The name of the Author',
  })
  name: string;
}
