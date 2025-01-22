import { SvelteKitAuth } from "@nextauth.js/sveltekit"
import GitHub from "@nextauth.js/sveltekit/providers/github"
import Credentials from "@nextauth.js/sveltekit/providers/credentials"
import Facebook from "@nextauth.js/sveltekit/providers/facebook"
import Discord from "@nextauth.js/sveltekit/providers/discord"
import Google from "@nextauth.js/sveltekit/providers/google"
import Passkey from "@nextauth.js/sveltekit/providers/passkey"
import { createStorage } from "unstorage"
import { UnstorageAdapter } from "@nextauth.js/unstorage-adapter"
import fsDriver from "unstorage/drivers/fs"
import { dev } from "$app/environment"

const storage = createStorage({
  driver: fsDriver({ base: "./tmp-unstorage" }),
})

export const { handle, signIn, signOut } = SvelteKitAuth({
  debug: dev ? true : false,
  adapter: UnstorageAdapter(storage),
  experimental: {
    enableWebAuthn: true,
  },
  providers: [
    Credentials({
      credentials: { password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (credentials.password !== "password") return null
        return {
          name: "Fill Murray",
          email: "bill@fillmurray.com",
          image: `https://api.dicebear.com/9.x/thumbs/svg?seed=234173&randomizeIds=true`,
          id: "1",
        }
      },
    }),
    GitHub,
    Google,
    Facebook,
    Discord,
    Passkey({
      formFields: {
        email: {
          label: "Username",
          required: true,
          autocomplete: "username webauthn",
        },
      },
    }),
  ],
  theme: {
    logo: "https://auth.khulnasoft.com/img/logo-sm.png",
  },
})
