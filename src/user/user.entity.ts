import { IsNotEmpty } from 'class-validator';
import { CommonEntity } from 'src/common/entities/common.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class User extends CommonEntity {
  @IsNotEmpty({ message: 'uid가 없습니다.' })
  @Column({ nullable: false, unique: true })
  uid: string;

  @IsNotEmpty({ message: 'type이 없습니다.' })
  @Column({ nullable: false })
  type: string;

  @IsNotEmpty({ message: '이메일을 입력해주세요.' })
  @Column({ nullable: false, unique: true })
  email: string;

  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  @Column({ nullable: false })
  password: string;

  @IsNotEmpty({ message: '닉네임을 입력해주세요.' })
  @Column({ nullable: false, unique: true })
  nickname: string;
}
