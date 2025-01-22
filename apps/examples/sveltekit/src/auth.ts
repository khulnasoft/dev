import { SvelteKitAuth } from "@nextauth.js/sveltekit"
import Apple from "@nextauth.js/sveltekit/providers/apple"
import Auth0 from "@nextauth.js/sveltekit/providers/auth0"
import AzureB2C from "@nextauth.js/sveltekit/providers/azure-ad-b2c"
import BoxyHQSAML from "@nextauth.js/sveltekit/providers/boxyhq-saml"
import Cognito from "@nextauth.js/sveltekit/providers/cognito"
import Coinbase from "@nextauth.js/sveltekit/providers/coinbase"
import Discord from "@nextauth.js/sveltekit/providers/discord"
import Dropbox from "@nextauth.js/sveltekit/providers/dropbox"
import Facebook from "@nextauth.js/sveltekit/providers/facebook"
import GitHub from "@nextauth.js/sveltekit/providers/github"
import GitLab from "@nextauth.js/sveltekit/providers/gitlab"
import Google from "@nextauth.js/sveltekit/providers/google"
import Hubspot from "@nextauth.js/sveltekit/providers/hubspot"
import Keycloak from "@nextauth.js/sveltekit/providers/keycloak"
import LinkedIn from "@nextauth.js/sveltekit/providers/linkedin"
import Netlify from "@nextauth.js/sveltekit/providers/netlify"
import Okta from "@nextauth.js/sveltekit/providers/okta"
import Passage from "@nextauth.js/sveltekit/providers/passage"
import Pinterest from "@nextauth.js/sveltekit/providers/pinterest"
import Reddit from "@nextauth.js/sveltekit/providers/reddit"
import Slack from "@nextauth.js/sveltekit/providers/slack"
import Spotify from "@nextauth.js/sveltekit/providers/spotify"
import Twitch from "@nextauth.js/sveltekit/providers/twitch"
import Twitter from "@nextauth.js/sveltekit/providers/twitter"
import WorkOS from "@nextauth.js/sveltekit/providers/workos"
import Zoom from "@nextauth.js/sveltekit/providers/zoom"
import { env } from "$env/dynamic/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
  trustHost: true,
  providers: [
    Apple,
    Auth0,
    AzureB2C({
      clientId: env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: env.AUTH_AZURE_AD_B2C_SECRET,
      issuer: env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
    BoxyHQSAML({
      clientId: "dummy",
      clientSecret: "dummy",
      issuer: env.AUTH_BOXYHQ_SAML_ISSUER,
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
    Keycloak,
    LinkedIn,
    Netlify,
    Okta,
    Passage,
    Pinterest,
    Reddit,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    WorkOS({
      connection: env.AUTH_WORKOS_CONNECTION!,
    }),
    Zoom,
  ],
})
