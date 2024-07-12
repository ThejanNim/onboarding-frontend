"use client";

import { AvatarSelection } from "@/components/molecules/Onboard/AvatarSelection/AvatarSelection";
import { NameSelection } from "@/components/molecules/Onboard/NameSelection/NameSelection";
import { UserProfileDetails } from "@/components/molecules/UserProfileDetails/UserProfileDetails";
import { useState } from "react";

export default function Page() {
  const [onboardStep, setOnboardStep] = useState(2);

  return (
    <div className="max-w-7xl m-auto flex items-center justify-between h-screen">
      {onboardStep === 1 && (
        <AvatarSelection
          onNextStep={() => setOnboardStep((prevStep: number) => prevStep + 1)}
        />
      )}
      {onboardStep === 2 && (
        <NameSelection
          onNextStep={() => {
            setOnboardStep((prevStep: number) => prevStep + 1);
          }}
        />
      )}
      <UserProfileDetails />
    </div>
  );
}
