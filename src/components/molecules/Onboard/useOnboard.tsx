"use client";

import constate from "constate";
import { useState } from "react";

const useOnboardContext = () => {
  const [userData, setUserData] = useState({
    name: "Your name",
  });

  return {
    userData,
    setUserData,
  };
};

export const [OnboardProvider, useOnboard] = constate(useOnboardContext);
