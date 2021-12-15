import { Request, Response, NextFunction } from 'express'

export async function admin(req: Request, res: Response, next: NextFunction) {
  const admin = false

  if (admin) {
    return next()
  }

  return res.status(401).json({ error: 'User is not admin' })
}
