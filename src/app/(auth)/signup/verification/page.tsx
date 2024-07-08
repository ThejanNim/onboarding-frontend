"use client";

import { Button } from "@/components/atoms/Button";
import { PinInput } from "@ark-ui/react";
import Image from "next/image";

import verification from "./assets/verification.svg";

export default function Page() {
  return (
    <div className="max-w-7xl m-auto flex items-center justify-between h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="font-medium text-4xl">Enter verification code</h2>
          <PinInput.Root
            onValueComplete={(e) => alert(e.valueAsString)}
            placeholder=""
            className="flex flex-col gap-6"
          >
            <PinInput.Label className="font-normal text-base text-[#475467]">
              Code is sent to{" "}
              <span className="font-semibold text-[#101828]">
                user@onboarding.com
              </span>
            </PinInput.Label>
            <PinInput.Control className="flex gap-3">
              {Array.from({ length: 5 }, (_, index) => (
                <PinInput.Input
                  key={index}
                  index={index}
                  className="size-20 border-2 border-[#D0D5DD] rounded-md"
                />
              ))}
            </PinInput.Control>
            <div className="font-normal text-base text-[#344054]">
              Didn't receive code?{" "}
              <span className="font-semibold text-[#6941C6]">
                Request again
              </span>
            </div>
            <PinInput.HiddenInput />
          </PinInput.Root>
        </div>
        <div>
          <Button className="w-32 bg-[#7F56D9] text-white">Verify</Button>
        </div>
      </div>
      <Image src={verification} alt="illustration" />
    </div>
  );
}
