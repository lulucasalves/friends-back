import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entity/Compliment'

@EntityRepository(Compliment)
class ComplimentsRepositories extends Repository<Compliment> {}

export { ComplimentsRepositories }
