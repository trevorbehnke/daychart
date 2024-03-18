"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("dc6d6a42-4334-4a27-8a65-6a1bbb5acf79");
  }, []);

  return null;
};
