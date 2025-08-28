import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/config";
import SignOutButton from "@/components/SignOutButton";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return (
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-xl font-semibold">Not signed in</h1>
        <a
          href="/login"
          className="inline-block rounded-md bg-black text-white px-4 py-2"
        >
          Go to login
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-md w-full space-y-6">
      <div className="space-y-1">
        <h1 className="text-xl font-semibold">Protected</h1>
        <p className="text-gray-600">Signed in as {session.user.email}</p>
      </div>
      <SignOutButton />
    </div>
  );
}

