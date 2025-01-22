import Apple from "@nextauth.js/express/providers/apple"
import Auth0 from "@nextauth.js/express/providers/auth0"
import AzureB2C from "@nextauth.js/express/providers/azure-ad-b2c"
import BoxyHQSAML from "@nextauth.js/express/providers/boxyhq-saml"
import Cognito from "@nextauth.js/express/providers/cognito"
import Coinbase from "@nextauth.js/express/providers/coinbase"
import Discord from "@nextauth.js/express/providers/discord"
import Dropbox from "@nextauth.js/express/providers/dropbox"
import Facebook from "@nextauth.js/express/providers/facebook"
import GitHub from "@nextauth.js/express/providers/github"
import Gitlab from "@nextauth.js/express/providers/gitlab"
import Google from "@nextauth.js/express/providers/google"
import Hubspot from "@nextauth.js/express/providers/hubspot"
import Keycloak from "@nextauth.js/express/providers/keycloak"
import LinkedIn from "@nextauth.js/express/providers/linkedin"
import Netlify from "@nextauth.js/express/providers/netlify"
import Okta from "@nextauth.js/express/providers/okta"
import Passage from "@nextauth.js/express/providers/passage"
import Pinterest from "@nextauth.js/express/providers/pinterest"
import Reddit from "@nextauth.js/express/providers/reddit"
import Slack from "@nextauth.js/express/providers/slack"
import Spotify from "@nextauth.js/express/providers/spotify"
import Twitch from "@nextauth.js/express/providers/twitch"
import Twitter from "@nextauth.js/express/providers/twitter"
import WorkOS from "@nextauth.js/express/providers/workos"
import Zoom from "@nextauth.js/express/providers/zoom"

export const authConfig = {
  trustHost: true,
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: [
    Apple,
    Auth0,
    AzureB2C({
      clientId: process.env.AUTH_AZURE_AD_B2C_ID,
      clientSecret: process.env.AUTH_AZURE_AD_B2C_SECRET,
      issuer: process.env.AUTH_AZURE_AD_B2C_ISSUER,
    }),
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
    Gitlab,
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
      connection: process.env.AUTH_WORKOS_CONNECTION!,
    }),
    Zoom,
  ],
}
