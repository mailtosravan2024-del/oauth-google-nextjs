"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="rounded-md bg-gray-900 text-white px-4 py-2"
    >
      Sign out
    </button>
  );
}

