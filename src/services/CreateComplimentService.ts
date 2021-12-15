import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositories } from '../repositories/ComplimentsRepositories'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message
  }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepositories = getCustomRepository(UsersRepositories)

    if (user_sender == user_receiver) {
      throw new Error('You cont send tag for same user')
    }

    const userReceiverAlreadyExists = await usersRepositories.findOne(
      user_receiver
    )

    if (!userReceiverAlreadyExists) {
      throw new Error('User receiver not exist')
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    return compliment
  }
}

export { CreateComplimentService }
