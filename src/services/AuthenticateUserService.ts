import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IUserRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({ email })

    if (!user) {
      throw new Error('User not exist')
    }

    const passswordMatch = await compare(password, user.password)

    if (!passswordMatch) {
      throw new Error('Informações incorretas')
    }

    const token = sign(
      { email: user.email },
      '8aa0fadb8044956c7cf0e5faa4cd4b644f1af5bdae39368205151b80affb4e48',
      { subject: user.id, expiresIn: '1d' }
    )

    return token
  }
}

export { AuthenticateUserService }
