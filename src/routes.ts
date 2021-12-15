import { Router } from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { admin } from './middlewares/admin'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { authenticate } from './middlewares/authenticate'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createCommentController = new CreateComplimentController()
const listUserSendComplimentsController =
  new ListUserSendComplimentsController()
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController()
const listTagController = new ListTagsController()
const listUserController = new ListUsersController()

router.post('/tags', authenticate, admin, createTagController.handle)
router.get('/tags', listTagController.handle)

router.post('/users', createUserController.handle)
router.get('/users', authenticate, listUserController.handle)

router.get('/users/send', listUserSendComplimentsController.handle)
router.get('/users/receive', listUserReceiveComplimentsController.handle)

router.post('/login', authenticateUserController.handle)
router.post('/compliments', createCommentController.handle)

export { router }
