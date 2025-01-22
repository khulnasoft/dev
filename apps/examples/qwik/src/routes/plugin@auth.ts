import { DefaultSession, QwikAuth$ } from "@nextauth.js/qwik";
import GitHub from "@nextauth.js/qwik/providers/github";

declare module "@nextauth.js/qwik" {
  interface Session {
    user: {
      roles: string[];
    } & DefaultSession["user"];
  }
}

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [GitHub],
  }),
);
