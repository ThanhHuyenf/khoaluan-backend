import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { CreateUsersDto } from './dto/create-users.dto'
import { Users } from './users.entity'
import { Role } from './users.enum'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  public async createUser(dto: CreateUsersDto): Promise<Users> {
    const users = {
      ...dto,
      role: Role.Student,
    }
    return this.usersRepository.save(users)
  }

  public async getById(id: number) {
    const user = await this.usersRepository.findOne(id)
    if (user) {
      return user
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    )
  }

  public async getRole(id: string) {
    const user = await this.usersRepository.findOne(id)
    if (user) {
      return user.role
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    )
  }

  public async changePassword(id: number, oldPassword, newPassword) {
    const user = await this.usersRepository.findOne(id)
    if (!user) {
      throw new NotFoundException('User not found')
    }
    try {
      await this.verifyPassword(oldPassword, user.password)
      const user2: Users = user
      const hashedNewPassword = await bcrypt.hash(newPassword, 10)
      user2.password = hashedNewPassword
      return this.usersRepository.save({
        ...user, // existing fields
        ...user2, // updated fields
      })
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST)
    }
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string,
  ) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword,
    )
    if (!isPasswordMatching) {
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST,
      )
    }
  }
}
