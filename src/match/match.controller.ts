import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/match.create.dto';
import { LikeMatchDto, UpdateMatchDto } from './dto/match.update.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getOneMatch(@Param('id') id: number) {
    return await this.matchService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllMatch() {
    return await this.matchService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async createUserLikeMatch(@Body() body: LikeMatchDto) {
    return await this.matchService.likeMatch(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createMatch(@Body() body: CreateMatchDto) {
    return await this.matchService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(@Param('id') id: number, @Body() body: UpdateMatchDto) {
    return await this.matchService.modify(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.matchService.remove(id);
  }
}
