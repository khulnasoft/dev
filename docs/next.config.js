import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
  codeHighlight: true,
})

export default withNextra({
  redirects: () => {
    return [
      {
        source: "/security.txt",
        destination: "/.well-known/security.txt",
        permanent: true,
      },
      {
        source: "/new/provider-issue",
        destination:
          "https://github.com/khulnasoft/nextdev/issues/new?assignees=&labels=triage%2Cproviders&template=2_bug_provider.yml",
        permanent: true,
      },
      {
        source: "/new/github-discussions",
        destination:
          "https://github.com/khulnasoft/nextdev/discussions/categories/questions",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "sveltekit.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/sveltekit",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "solid-start.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/solid-start",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "express.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/express",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "nextjs.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/nextjs",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "qwik.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/qwik",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "cli.auth.khulnasoft.com" }],
        destination: "https://github.com/nextauthjs/cli",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "errors.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/core/errors/:path*",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "warnings.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/warnings/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "adapters.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/getting-started/database",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "adapters.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/reference/adapter/:path*",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "providers.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/getting-started/authentication/oauth",
        permanent: true,
      },
      {
        source: "/:path(.*)",
        has: [{ type: "host", value: "providers.auth.khulnasoft.com" }],
        destination: "https://auth.khulnasoft.com/getting-started/providers/:path",
        permanent: true,
      },
      {
        source: "/reference/core/providers_:slug(.*)",
        destination: "/reference/core/providers/:slug",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "host", value: "discord.auth.khulnasoft.com" }],
        destination: "https://discord.gg/kuv7wXkHY4",
        permanent: true,
      },
      {
        source: "/reference/next-auth:path(.*)",
        destination: "/reference/nextjs:path(.*)",
        permanent: true,
      },
      {
        source: "/img/providers/:providerId*-dark.svg",
        destination: "/img/providers/:providerId*.svg",
        permanent: true,
      },
      {
        source: "/reference/adapter/:path(.*)",
        destination: "/getting-started/adapters/:path(.*)",
        permanent: true,
      },
      {
        source: "/getting-started/providers/email",
        destination: "/getting-started/providers/nodemailer",
        permanent: true,
      },
      {
        source: "/guides/basics/role-based-access-control",
        destination: "/guides/role-based-access-control",
        permanent: true,
      },
      {
        source: "/guides/basics/refresh-token-rotation",
        destination: "/guides/refresh-token-rotation",
        permanent: true,
      },
      {
        source: "/getting-started/providers",
        destination: "/getting-started/authentication/oauth",
        permanent: true,
      },
      {
        source: "/getting-started/providers/oauth-tutorial",
        destination: "/getting-started/authentication/oauth",
        permanent: true,
      },
      {
        source: "/getting-started/providers/email-tutorial",
        destination: "/getting-started/authentication/email",
        permanent: true,
      },
      {
        source: "/getting-started/providers/credentials-tutorial",
        destination: "/getting-started/providers/credentials",
        permanent: true,
      },
      {
        source: "/guides/providers/email-http",
        destination: "/guides/configuring-http-email",
        permanent: true,
      },
      {
        source: "/guides/upgrade-to-v5",
        destination: "/getting-started/migrating-to-v5",
        permanent: true,
      },
      {
        permanent: true,
        source: "/guides",
        destination: "/guides/debugging",
      },
    ]
  },
})
