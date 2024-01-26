import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
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
  @IsNotEmpty({ message: 'social type이 없습니다.' })
  @Column({ nullable: false })
  type: string;

  @IsNotEmpty({ message: '이메일을 입력해주세요.' })
  @IsEmail({}, { message: '이메일 형식을 확인해주세요.' })
  @Column({ nullable: false, unique: true })
  email: string;

  @IsNotEmpty({ message: '비밀번호를 입력해주세요.' })
  @Length(6, 20, {
    message: '비밀번호는 6자리 이상 20자리 이하로 설정해주세요.',
  })
  @Column({ nullable: false })
  password: string;

  @IsNotEmpty({ message: '닉네임을 입력해주세요.' })
  @Length(2, 10, {
    message: '닉네임은 2자리 이상 10자리 이하로 설정해주세요.',
  })
  @Column({ nullable: false, unique: true })
  nickname: string;

  @Column({ nullable: true })
  profileIcon: number;
}
