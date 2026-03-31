const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateName(value: string) {
  if (!value.trim()) {
    return "Please enter your full name.";
  }

  if (value.trim().length < 2) {
    return "Name should be at least 2 characters.";
  }

  return undefined;
}

export function validateEmail(value: string) {
  if (!value.trim()) {
    return "Email is required.";
  }

  if (!emailPattern.test(value)) {
    return "Enter a valid email address.";
  }

  return undefined;
}

export function validatePassword(value: string) {
  if (!value) {
    return "Password is required.";
  }

  if (value.length < 8) {
    return "Password must be at least 8 characters.";
  }

  return undefined;
}
