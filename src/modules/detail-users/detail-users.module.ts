import { Module } from '@nestjs/common';
import { DetailUsersService } from './detail-users.service';
import { DetailUsersController } from './detail-users.controller';

@Module({
  providers: [DetailUsersService],
  controllers: [DetailUsersController]
})
export class DetailUsersModule {}
