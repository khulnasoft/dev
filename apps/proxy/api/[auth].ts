import { Auth, setEnvDefaults, type AuthConfig } from "@nextauth.js/core"
import Apple from "@nextauth.js/core/providers/apple"
import Auth0 from "@nextauth.js/core/providers/auth0"
import AzureB2C from "@nextauth.js/core/providers/azure-ad-b2c"
import BankId from "@nextauth.js/core/providers/bankid-no"
import BoxyHQSAML from "@nextauth.js/core/providers/boxyhq-saml"
import Cognito from "@nextauth.js/core/providers/cognito"
import Coinbase from "@nextauth.js/core/providers/coinbase"
import Discord from "@nextauth.js/core/providers/discord"
import Dropbox from "@nextauth.js/core/providers/dropbox"
import Facebook from "@nextauth.js/core/providers/facebook"
import GitHub from "@nextauth.js/core/providers/github"
import GitLab from "@nextauth.js/core/providers/gitlab"
import Google from "@nextauth.js/core/providers/google"
import Hubspot from "@nextauth.js/core/providers/hubspot"
import Keycloak from "@nextauth.js/core/providers/keycloak"
import LinkedIn from "@nextauth.js/core/providers/linkedin"
import MicrosoftEntraId from "@nextauth.js/core/providers/microsoft-entra-id"
import Netlify from "@nextauth.js/core/providers/netlify"
import Okta from "@nextauth.js/core/providers/okta"
import Passage from "@nextauth.js/core/providers/passage"
import Pinterest from "@nextauth.js/core/providers/pinterest"
import Reddit from "@nextauth.js/core/providers/reddit"
import Salesforce from "@nextauth.js/core/providers/salesforce"
import Slack from "@nextauth.js/core/providers/slack"
import Spotify from "@nextauth.js/core/providers/spotify"
import Twitch from "@nextauth.js/core/providers/twitch"
import Twitter from "@nextauth.js/core/providers/twitter"
import Vipps from "@nextauth.js/core/providers/vipps"
import WorkOS from "@nextauth.js/core/providers/workos"
import Zoom from "@nextauth.js/core/providers/zoom"

const authConfig: AuthConfig = {
  providers: [
    Apple,
    Auth0,
    AzureB2C,
    BankId,
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
    Keycloak,
    LinkedIn,
    MicrosoftEntraId,
    Netlify,
    Okta,
    Passage,
    Pinterest,
    Reddit,
    Salesforce,
    Slack,
    Spotify,
    Twitch,
    Twitter,
    Vipps,
    WorkOS,
    Zoom,
    {
      id: "tiktok",
      name: "TikTok",
      type: "oauth",
      checks: ["state"],
      clientId: process.env.AUTH_TIKTOK_ID,
      clientSecret: process.env.AUTH_TIKTOK_SECRET,
      authorization: {
        url: "https://www.tiktok.com/v2/auth/authorize",
        params: {
          client_key: process.env.AUTH_TIKTOK_ID,
          scope: "user.info.basic",
        },
      },
      token: "https://open.tiktokapis.com/v2/oauth/token/",
      userinfo:
        "https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,username",
      profile(profile: any) {
        return profile
      },
      style: {
        bg: "#000",
        text: "#fff",
      },
    },
  ],
  basePath: "/api",
}
setEnvDefaults(process.env, authConfig)

export default function handler(req: Request) {
  return Auth(req, authConfig)
}

export const config = { runtime: "edge" }
