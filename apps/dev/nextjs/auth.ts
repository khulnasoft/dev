import NextAuth from "nextauth.js"
import Credentials from "nextauth.js/providers/credentials"
import Keycloak from "nextauth.js/providers/keycloak"
import GitHub from "nextauth.js/providers/github"

// import { PrismaClient } from "@prisma/client"
// import { PrismaAdapter } from "@nextauth.js/prisma-adapter"
// import SendGrid from "nextauth.js/providers/sendgrid"
// import Resend from "nextauth.js/providers/resend"
// import Email from "nextauth.js/providers/email"

// globalThis.prisma ??= new PrismaClient()

// authConfig.providers.push(
//   // Start server with `pnpm email`
//   Email({ server: "smtp://127.0.0.1:1025?tls.rejectUnauthorized=false" }),
//   SendGrid,
//   Resend
// )

// export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth(
//   (request) => {
//     if (request?.nextUrl.searchParams.get("test")) {
//       return {
//         // adapter: PrismaAdapter(globalThis.prisma),
//         session: { strategy: "jwt" },
//         ...authConfig,
//         providers: [],
//       }
//     }
//     return {
//       // adapter: PrismaAdapter(globalThis.prisma),
//       session: { strategy: "jwt" },
//       ...authConfig,
//     }
//   }
// )

declare module "nextauth.js" {
  /**
   * Returned by `useSession`, `getSession`, `auth` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string
    } & User
  }

  interface User {
    foo?: string
  }
}

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: { password: { label: "Password", type: "password" } },
      authorize(c) {
        if (c.password !== "password") return null
        return {
          id: "test",
          name: "Test User",
          email: "test@example.com",
        }
      },
    }),
    GitHub,
    Keycloak,
  ],

  callbacks: {
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
  },
  basePath: "/auth",
  session: { strategy: "jwt" },
})
