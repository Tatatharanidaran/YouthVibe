"use client";

import { useEffect, useState } from "react";

import { profile as defaultProfile } from "@/data/profile";
import { getFirstName, getInitials, readUserProfile } from "@/utils/user-profile";

export function useUserProfile() {
  const [fullName, setFullName] = useState<string>(defaultProfile.name);

  useEffect(() => {
    const storedProfile = readUserProfile();

    if (storedProfile?.fullName) {
      setFullName(storedProfile.fullName);
    }
  }, []);

  return {
    fullName,
    firstName: getFirstName(fullName),
    initials: getInitials(fullName)
  };
}
