import express, { Application, Request, Response } from 'express'
import nextJS from 'next'

export const init = async (): Promise<Application> => {
  const dev = process.env.NODE_ENV !== 'production'
  const nextApp = nextJS({ dev })
  const handle = nextApp.getRequestHandler()
  const app: Application = express()

  await Promise.all([nextApp.prepare()])

  app.get('*', (req: Request, res: Response) => handle(req, res))

  return app
}
