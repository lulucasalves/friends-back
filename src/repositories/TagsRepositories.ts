import { EntityRepository, Repository } from 'typeorm'
import { Tag } from '../entity/Tag'

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export { TagsRepositories }
