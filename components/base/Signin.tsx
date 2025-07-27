import { signIn } from "@/auth";
import GoogleIcon from "../../public/google-logo.svg";
import Image from "next/image";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="flex gap-2">
        <Image src={GoogleIcon} alt="Google Icon" width={24} height={24} />
        <span className="text-sm text-blue-500">Signin with Google</span>
      </button>
    </form>
  );
}
