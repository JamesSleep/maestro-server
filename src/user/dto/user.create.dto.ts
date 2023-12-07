import { PickType } from '@nestjs/swagger';
import { User } from '../user.entity';

export class CreateUserDto extends PickType(User, [
  'uid',
  'email',
  'password',
  'nickname',
  'type',
]) {}
