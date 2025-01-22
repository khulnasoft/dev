import NextAuth from "nextauth.js"
import "next-auth/jwt"

import Apple from "nextauth.js/providers/apple"
// import Atlassian from "nextauth.js/providers/atlassian"
import Auth0 from "nextauth.js/providers/auth0"
import AzureB2C from "nextauth.js/providers/azure-ad-b2c"
import BankIDNorway from "nextauth.js/providers/bankid-no"
import BoxyHQSAML from "nextauth.js/providers/boxyhq-saml"
import Cognito from "nextauth.js/providers/cognito"
import Coinbase from "nextauth.js/providers/coinbase"
import Discord from "nextauth.js/providers/discord"
import Dropbox from "nextauth.js/providers/dropbox"
import Facebook from "nextauth.js/providers/facebook"
import GitHub from "nextauth.js/providers/github"
import GitLab from "nextauth.js/providers/gitlab"
import Google from "nextauth.js/providers/google"
import Hubspot from "nextauth.js/providers/hubspot"
import Keycloak from "nextauth.js/providers/keycloak"
import LinkedIn from "nextauth.js/providers/linkedin"
import MicrosoftEntraId from "nextauth.js/providers/microsoft-entra-id"
import Netlify from "nextauth.js/providers/netlify"
import Okta from "nextauth.js/providers/okta"
import Passage from "nextauth.js/providers/passage"
import Passkey from "nextauth.js/providers/passkey"
import Pinterest from "nextauth.js/providers/pinterest"
import Reddit from "nextauth.js/providers/reddit"
import Slack from "nextauth.js/providers/slack"
import Salesforce from "nextauth.js/providers/salesforce"
import Spotify from "nextauth.js/providers/spotify"
import Twitch from "nextauth.js/providers/twitch"
import Twitter from "nextauth.js/providers/twitter"
import Vipps from "nextauth.js/providers/vipps"
import WorkOS from "nextauth.js/providers/workos"
import Zoom from "nextauth.js/providers/zoom"
import { createStorage } from "unstorage"
import memoryDriver from "unstorage/drivers/memory"
import vercelKVDriver from "unstorage/drivers/vercel-kv"
import { UnstorageAdapter } from "@nextauth.js/unstorage-adapter"

const storage = createStorage({
  driver: process.env.VERCEL
    ? vercelKVDriver({
        url: process.env.AUTH_KV_REST_API_URL,
        token: process.env.AUTH_KV_REST_API_TOKEN,
        env: false,
      })
    : memoryDriver(),
})

export const { handlers, auth, signIn, signOut } = NextAuth({
  debug: !!process.env.AUTH_DEBUG,
  theme: { logo: "https://auth.khulnasoft.com/img/logo-sm.png" },
  adapter: UnstorageAdapter(storage),
  providers: [
    Apple,
    // Atlassian,
    Auth0,
    AzureB2C,
    BankIDNorway,
    BoxyHQSAML({
      clientId: "dummy",
      clientSecret: "dummy",
      issuer: process.env.AUTH_BOXYHQ_SAML_ISSUER,
    }),
    Cognito,
    Coinbase,
    Discord,
    Dropbox,
    Facebook,
    GitHub,
    GitLab,
    Google,
    Hubspot,
    Keycloak({ name: "Keycloak (bob/bob)" }),
    LinkedIn,
    MicrosoftEntraId,
    Netlify,
    Okta,
    Passkey({
      formFields: {
        email: {
          label: "Username",
          required: true,
          autocomplete: "username webauthn",
        },
      },
    }),
    Passage,
    Pinterest,
    Reddit,
    Salesforce,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    Vipps({
      issuer: "https://apitest.vipps.no/access-management-1.0/access/",
    }),
    WorkOS({ connection: process.env.AUTH_WORKOS_CONNECTION! }),
    Zoom,
  ],
  basePath: "/auth",
  session: { strategy: "jwt" },
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session, account }) {
      if (trigger === "update") token.name = session.user.name
      if (account?.provider === "keycloak") {
        return { ...token, accessToken: account.access_token }
      }
      return token
    },
    async session({ session, token }) {
      if (token?.accessToken) session.accessToken = token.accessToken

      return session
    },
  },
  experimental: { enableWebAuthn: true },
})

declare module "nextauth.js" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}
