import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { admin } from './middlewares/admin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { authenticate } from './middlewares/authenticate'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createCommentController = new CreateComplimentController()

router.post('/tags', authenticate, admin, createTagController.handle)
router.get('/tags', createTagController.handle)
router.post('/users', createUserController.handle)
router.get('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/compliments', createCommentController.handle)

export { router }
