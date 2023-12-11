import { Controller, Get } from '@nestjs/common';
import { TournamentService } from './tournament.service';

@Controller('tournament')
export class TournamentController {
  constructor(private readonly tournamentService: TournamentService) {}

  @Get()
  async getAllTournament() {
    return await this.tournamentService.findAll();
  }
}
