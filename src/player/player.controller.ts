import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PlayerService } from './player.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { LikePlayerDto } from './dto/player.update.dto';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllPlayer() {
    return await this.playerService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post('like')
  async createUserLikeMatch(@Body() body: LikePlayerDto) {
    return await this.playerService.likePlayer(body);
  }
}
