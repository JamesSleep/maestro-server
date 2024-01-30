import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RecentService } from './recent.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorators';
import { User } from 'src/user/user.entity';

@Controller('recent')
export class RecentController {
  constructor(private readonly recentService: RecentService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getRecentMatchByUser(@CurrentUser() user: User) {
    return await this.recentService.findByUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createRecent(@Body() body: { userId: number; matchId: number }) {
    return await this.recentService.create(body);
  }
}
