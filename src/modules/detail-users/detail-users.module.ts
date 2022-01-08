import { Module } from '@nestjs/common'
import { DetailUsersService } from './detail-users.service'
import { DetailUsersController } from './detail-users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DetailUsers } from './detail-users.entity'
import { MailModule } from '../mail/mail.module'

@Module({
  imports: [TypeOrmModule.forFeature([DetailUsers]), MailModule],
  providers: [DetailUsersService],
  controllers: [DetailUsersController],
})
export class DetailUsersModule {}
