import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Memoji from "@/app/(auth)/signup/onboard/assets/memoji_01.svg";
import { UserProfileDetails } from "../UserProfileDetails/UserProfileDetails";

export function AvatarSelection() {
  return (
    <div className="max-w-7xl m-auto flex items-center justify-between h-screen">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h2 className="font-medium text-4xl">Select a avatar for you?</h2>
          <div className="flex flex-col gap-3">
            <div className="flex gap-3">
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
            </div>
            <div className="flex gap-3">
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
              <Image
                src={Memoji}
                width={80}
                height={80}
                alt="memoji"
                className="border rounded-xl border-[#EAECF0]"
              />
            </div>
          </div>
        </div>
        <div>
          <Button className="w-32 bg-[#7F56D9] text-white">Verify</Button>
        </div>
      </div>
      <UserProfileDetails />
    </div>
  );
}
