"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="max-w-sm w-full bg-white shadow rounded-lg p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <p className="text-sm text-gray-600">Use your Google account</p>
      </div>
      <button
        onClick={() => signIn("google", { callbackUrl: "/protected" })}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-black text-white py-2.5 hover:bg-gray-900"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.444,6.053,28.973,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.444,6.053,28.973,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
          <path fill="#4CAF50" d="M24,44c4.874,0,9.337-1.794,12.728-4.732l-5.873-4.963C28.861,35.091,26.545,36,24,36c-5.202,0-9.626-3.317-11.287-7.946l-6.55,5.047C9.474,39.556,16.227,44,24,44z"/>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.793,2.237-2.231,4.166-4.102,5.605c0.001-0.001,0.002-0.001,0.003-0.002l5.873,4.963C36.65,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
        Continue with Google
      </button>
    </div>
  );
}

