import { Request, Response, NextFunction, request } from 'express'
import { verify } from 'jsonwebtoken'

export async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return res.status(401).end()
  }

  const [, token] = authToken.split(' ')

  try {
    const decode = verify(
      token,
      '8aa0fadb8044956c7cf0e5faa4cd4b644f1af5bdae39368205151b80affb4e48'
    )
  } catch (err) {
    return res.status(401).end()
  }

  return next()
}
