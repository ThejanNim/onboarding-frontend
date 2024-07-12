import Image from "next/image";
import Memoji from "@/app/(auth)/signup/onboard/assets/memoji_01.svg";
import { useOnboard } from "../Onboard/useOnboard";

export function UserProfileDetails() {
  const { userData } = useOnboard();
  return (
    <div className="w-[481px]">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={Memoji}
          width={100}
          height={100}
          alt="profile avatar"
          className="bg-[#F9F5FF] rounded-[4px]"
        />
        <h4 className="text-[#111827] font-medium text-lg">{userData.name}</h4>
        <div className="py-[2px] px-2 border border-[#EAECF0] rounded-full font-medium text-xs text-[#344054]">
          Your age
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <label htmlFor="type" className="text-[#9CA3AF]">
              Company Type
            </label>
            <div
              id="type"
              className="border py-[2px] px-2 rounded-full bg-[#F9FAFB] border-[#EAECF0] text-xs font-medium text-[#344054]"
            >
              -
            </div>
          </div>
          <div className="flex justify-between">
            <label htmlFor="name" className="text-[#9CA3AF]">
              Company Name
            </label>
            <div
              id="name"
              className="border py-[2px] px-2 rounded-full bg-[#F9FAFB] border-[#EAECF0] text-xs font-medium text-[#344054]"
            >
              -
            </div>
          </div>
          <div className="flex justify-between">
            <label htmlFor="size" className="text-[#9CA3AF]">
              Company Size
            </label>
            <div
              id="size"
              className="border py-[2px] px-2 rounded-full bg-[#F9FAFB] border-[#EAECF0] text-xs font-medium text-[#344054]"
            >
              -
            </div>
          </div>
          <div className="flex justify-between">
            <label htmlFor="role" className="text-[#9CA3AF]">
              Your role
            </label>
            <div
              id="role"
              className="border py-[2px] px-2 rounded-full bg-[#F9FAFB] border-[#EAECF0] text-xs font-medium text-[#344054]"
            >
              -
            </div>
          </div>
        </div>
        <p className="text-[#667085] text-center leading-[18px]">
          Powered by{" "}
          <span className="text-[#101828] font-semibold leading-[18px]">
            onboarding.com
          </span>
        </p>
      </div>
    </div>
  );
}
