"use client";

import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import googleIcon from "./assets/google.svg";
import facebookIcon from "./assets/facebook.svg";
import appleIcon from "./assets/apple.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup/verification");
  };

  return (
    <div className="relative top-56 flex max-w-96 m-auto flex-col h-[628px] justify-between text-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center gap-1">
          <Image src="/images/logo.svg" width={44} height={48} alt="Logo" />
          <h1 className="font-semibold text-4xl text-[#101828]">Onboarding</h1>
          <p className="text-center font-normal text-base text-[#475467]">
            Get better data with conversational forms, surveys, quizzes & more.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button
            className="bg-white text-[#344054] border border-[#D0D5DD]"
            onClick={handleSignUp}
          >
            <Image src={googleIcon} width={24} height={24} alt="google logo" />
            Sign up with Google
          </Button>
          <Button className="bg-[#1877F2] text-white" onClick={handleSignUp}>
            <Image
              src={facebookIcon}
              width={24}
              height={24}
              alt="google logo"
            />
            Sign up with Facebook
          </Button>
          <Button className="bg-black text-white" onClick={handleSignUp}>
            <Image src={appleIcon} width={24} height={24} alt="google logo" />
            Sign up with Apple
          </Button>
        </div>
        <span className="text-[#667085] font-medium text-sm">OR</span>
        <Button className="bg-[#7F56D9] text-white" onClick={handleSignUp}>
          Sign up with email
        </Button>
      </div>
      <div className="flex justify-center gap-3">
        <p>Already have an account?</p>
        <Link
          href="/signup/verification"
          className="text-[#6941C6] font-semibold text-sm"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
