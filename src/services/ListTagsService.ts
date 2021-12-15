import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find()

    return classToPlain(tags)
  }
}

export { ListTagsService }
