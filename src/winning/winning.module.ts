import { Module } from '@nestjs/common';
import { WinningController } from './winning.controller';
import { WinningService } from './winning.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Winning } from './winning.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Winning])],
  controllers: [WinningController],
  providers: [WinningService],
})
export class WinningModule {}
