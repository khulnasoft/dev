import NextAuth from "nextauth.js"

// import Apple from "nextauth.js/providers/apple"
// import Auth0 from "nextauth.js/providers/auth0"
// import Authentik from "nextauth.js/providers/authentik"
// import AzureAD from "nextauth.js/providers/azure-ad"
// import AzureB2C from "nextauth.js/providers/azure-ad-b2c"
// import Battlenet from "nextauth.js/providers/battlenet"
// import Box from "nextauth.js/providers/box"
// import BoxyHQSAML from "nextauth.js/providers/boxyhq-saml"
// import Bungie from "nextauth.js/providers/bungie"
// import Cognito from "nextauth.js/providers/cognito"
// import Coinbase from "nextauth.js/providers/coinbase"
// import Discord from "nextauth.js/providers/discord"
// import Dropbox from "nextauth.js/providers/dropbox"
// import DuendeIDS6 from "nextauth.js/providers/duende-identity-server6"
// import Eveonline from "nextauth.js/providers/eveonline"
// import Facebook from "nextauth.js/providers/facebook"
// import Faceit from "nextauth.js/providers/faceit"
// import FortyTwoSchool from "nextauth.js/providers/42-school"
// import Foursquare from "nextauth.js/providers/foursquare"
// import Freshbooks from "nextauth.js/providers/freshbooks"
// import Fusionauth from "nextauth.js/providers/fusionauth"
import GitHub from "nextauth.js/providers/github"
// import GitLab from "nextauth.js/providers/gitlab"
// import Google from "nextauth.js/providers/google"
// import Hubspot from "nextauth.js/providers/hubspot"
// import Instagram from "nextauth.js/providers/instagram"
// import Kakao from "nextauth.js/providers/kakao"
// import Keycloak from "nextauth.js/providers/keycloak"
// import Line from "nextauth.js/providers/line"
// import LinkedIn from "nextauth.js/providers/linkedin"
// import Mailchimp from "nextauth.js/providers/mailchimp"
// import Mailru from "nextauth.js/providers/mailru"
// import Medium from "nextauth.js/providers/medium"
// import Naver from "nextauth.js/providers/naver"
// import Netlify from "nextauth.js/providers/netlify"
// import Okta from "nextauth.js/providers/okta"
// import Onelogin from "nextauth.js/providers/onelogin"
// import Osso from "nextauth.js/providers/osso"
// import Osu from "nextauth.js/providers/osu"
// import Passage from "nextauth.js/providers/passage"
// import Patreon from "nextauth.js/providers/patreon"
// import Pinterest from "nextauth.js/providers/pinterest"
// import Pipedrive from "nextauth.js/providers/pipedrive"
// import Reddit from "nextauth.js/providers/reddit"
// import Salesforce from "nextauth.js/providers/salesforce"
// import Slack from "nextauth.js/providers/slack"
// import Spotify from "nextauth.js/providers/spotify"
// import Strava from "nextauth.js/providers/strava"
// import Todoist from "nextauth.js/providers/todoist"
// import Trakt from "nextauth.js/providers/trakt"
// import Twitch from "nextauth.js/providers/twitch"
// import Twitter from "nextauth.js/providers/twitter"
// import UnitedEffects from "nextauth.js/providers/united-effects"
// import Vk from "nextauth.js/providers/vk"
// import Wikimedia from "nextauth.js/providers/wikimedia"
// import WordPress from "nextauth.js/providers/wordpress"
// import WorkOS from "nextauth.js/providers/workos"
// import Yandex from "nextauth.js/providers/yandex"
// import Zitadel from "nextauth.js/providers/zitadel"
// import Zoho from "nextauth.js/providers/zoho"
// import Zoom from "nextauth.js/providers/zoom"

import type { NextAuthConfig } from "nextauth.js"

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo-sm.png",
  },
  providers: [
    // Apple,
    // Auth0,
    // Authentik,
    // AzureAD,
    // AzureB2C,
    // Battlenet,
    // Box,
    // BoxyHQSAML,
    // Bungie,
    // Cognito,
    // Coinbase,
    // Discord,
    // Dropbox,
    // DuendeIDS6,
    // Eveonline,
    // Facebook,
    // Faceit,
    // FortyTwoSchool,
    // Foursquare,
    // Freshbooks,
    // Fusionauth,
    GitHub,
    // GitLab,
    // Google,
    // Hubspot,
    // Instagram,
    // Kakao,
    // Keycloak,
    // Line,
    // LinkedIn,
    // Mailchimp,
    // Mailru,
    // Medium,
    // Naver,
    // Netlify,
    // Okta,
    // Onelogin,
    // Osso,
    // Osu,
    // Passage,
    // Patreon,
    // Pinterest,
    // Pipedrive,
    // Reddit,
    // Salesforce,
    // Slack,
    // Spotify,
    // Strava,
    // Todoist,
    // Trakt,
    // Twitch,
    // Twitter,
    // UnitedEffects,
    // Vk,
    // Wikimedia,
    // WordPress,
    // WorkOS,
    // Yandex,
    // Zitadel,
    // Zoho,
    // Zoom,
  ],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === "/middleware-example") return !!auth
      return true
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") token.name = session.user.name
      return token
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
