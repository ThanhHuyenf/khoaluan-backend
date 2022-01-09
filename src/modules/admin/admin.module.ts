import { Module } from '@nestjs/common'
import { AdminService } from './admin.service'
import { AdminController } from './admin.controller'
import { UsersService } from '../users/users.service'
import { UsersModule } from '../users/users.module'

@Module({
  imports: [UsersModule],
  providers: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
