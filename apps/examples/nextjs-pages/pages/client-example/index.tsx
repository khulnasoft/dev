import { useSession } from "nextauth.js/react"
import ClientExample from "@/components/client-example"
import { SessionProvider } from "nextauth.js/react"

export default function ClientPage() {
  const { data: session } = useSession()
  if (session?.user) {
    // TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
    // filter out sensitive data before passing to client.
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    }
  }

  return (
    <SessionProvider session={session}>
      <ClientExample />
    </SessionProvider>
  )
}
