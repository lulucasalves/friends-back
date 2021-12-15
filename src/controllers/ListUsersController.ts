import { Request, Response } from 'express'
import { ListUsersService } from '../services/ListUsersService'

class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService()

    const Users = await listUsersService.execute()

    return res.json(Users)
  }
}

export { ListUsersController }
