const { EntityRepository, Repository } = require('typeorm')
const { User } = require('../entity/User')

@EntityRepository(User)
class UsersRepositories extends Repository {
 
}

export { UsersRepositories }
