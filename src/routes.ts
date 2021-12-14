import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserControler'
import { CreateTagController } from './controllers/CreateTagControler'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post('/tags', createTagController.handle)
router.post('/users', createUserController.handle)

export { router }
