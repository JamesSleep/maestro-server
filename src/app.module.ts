import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MatchModule } from './match/match.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';
import { ClubModule } from './club/club.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: Number(configService.get('DATABASE_PORT')),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASS'),
        database: configService.get('DATABASE_DATA'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    MatchModule,
    UserModule,
    CommentModule,
    AuthModule,
    ClubModule,
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
