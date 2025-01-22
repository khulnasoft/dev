/**
 *
 * :::warning
 * `@nextauth.js/<framework-id>` is currently experimental. The API _will_ change in the future.
 * :::
 *
 * <framework-name> Auth is the official <framework-name> integration for NextAuth.js.
 * It provides a simple way to add authentication to your <framework-name> app in a few lines of code.
 *
 * ## Installation
 * ```bash npm2yarn
 * npm install @nextauth.js/<framework-id>
 * ```
 *
 * ## Usage
 *
 * ### Provider Configuration
 *
 * ## Signing in and signing out
 *
 * ## Managing the session
 *
 * ## Authorization
 *
 * ```
 *
 * @module @nextauth.js/<framework-id>
 */

// Re-export types of NextAuth.js
export type {
  Account,
  DefaultSession,
  Profile,
  Session,
  User,
} from "@nextauth.js/core/types"

export function FrameworkAuth() {
  throw new Error("Not implemented")
}
