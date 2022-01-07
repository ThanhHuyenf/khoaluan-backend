import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { Users } from 'src/modules/users/users.entity'
import { AuthService } from '../auth.service'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super({
      usernameField: 'id',
    })
  }
  async validate(id: number, password: string): Promise<Users> {
    return this.authenticationService.login(id, password)
  }
}
