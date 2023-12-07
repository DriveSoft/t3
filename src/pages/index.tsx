import Head from "next/head";
import Link from "next/link";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const user = useUser();

  return (
    <>
      <UserButton afterSignOutUrl="/" />
      {user.isSignedIn && <div><SignOutButton /></div> }
      {!user.isSignedIn && <div><SignInButton /></div> }

      {hello.data ? hello.data.greeting : "Loading tRPC query..."}

    </>
  );
}
