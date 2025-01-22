import { type Session } from "@nextauth.js/express"

declare module "express" {
  interface Response {
    locals: {
      session?: Session
    }
  }
}
