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
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)
    const usersRepository = getCustomRepository(UsersRepositories)

    if (user_sender == user_receiver) {
      throw new Error('You cont send tag for same user')
    }

    const userReceiverAlreadyExists = await usersRepository.findOne(
      user_receiver
    )

    if (!userReceiverAlreadyExists) {
      throw new Error('User receiver not exist')
    }

    const compliment = complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })
  }
}

export { CreateComplimentService }
