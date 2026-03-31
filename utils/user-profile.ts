export const USER_PROFILE_STORAGE_KEY = "youthvibe-user-profile";

export type StoredUserProfile = {
  fullName: string;
  email: string;
};

export function getInitials(fullName: string) {
  const parts = fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);

  if (parts.length === 0) {
    return "AS";
  }

  return parts.map((part) => part[0]?.toUpperCase() ?? "").join("");
}

export function getFirstName(fullName: string) {
  return fullName.trim().split(/\s+/).filter(Boolean)[0] ?? "Aarav";
}

export function saveUserProfile(profile: StoredUserProfile) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(USER_PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function readUserProfile() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(USER_PROFILE_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as StoredUserProfile;
  } catch {
    return null;
  }
}
