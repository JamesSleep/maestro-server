import { PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from '../user.entity';

export class UpdateUserDto extends PickType(User, ['nickname', 'password']) {}
