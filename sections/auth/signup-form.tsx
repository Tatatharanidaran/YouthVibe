"use client";

import { useRouter } from "next/navigation";
import { AtSign, LockKeyhole, Sparkles, User2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveUserProfile } from "@/utils/user-profile";
import { validateEmail, validateName, validatePassword } from "@/utils/validation";

type SignupState = {
  fullName: string;
  email: string;
  password: string;
};

export function SignupForm() {
  const router = useRouter();
  const [values, setValues] = useState<SignupState>({
    fullName: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<SignupState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof SignupState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setValues((current) => ({ ...current, [field]: nextValue }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<SignupState> = {
      fullName: validateName(values.fullName),
      email: validateEmail(values.email),
      password: validatePassword(values.password)
    };

    setErrors(nextErrors);

    if (nextErrors.fullName || nextErrors.email || nextErrors.password) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    saveUserProfile({
      fullName: values.fullName.trim(),
      email: values.email.trim()
    });
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-3xl font-semibold tracking-[-0.04em] text-white">Create account</p>
        <p className="mt-2 text-sm leading-6 text-white/48">
          Start with a profile designed for future builders.
        </p>
      </div>

      <div className="rounded-2xl border border-coral/15 bg-coral/8 px-4 py-3 text-sm text-white/72">
        You’ll be able to choose interests right after sign up.
      </div>

      <div className="space-y-4">
        <Input
          label="Full name"
          type="text"
          placeholder="Aarav Sharma"
          value={values.fullName}
          onChange={handleChange("fullName")}
          error={errors.fullName}
          icon={<User2 className="h-4 w-4" />}
        />
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
          icon={<AtSign className="h-4 w-4" />}
        />
        <Input
          label="Password"
          type="password"
          placeholder="At least 8 characters"
          value={values.password}
          onChange={handleChange("password")}
          error={errors.password}
          hint="Use a mix of letters and numbers for a stronger password."
          icon={<LockKeyhole className="h-4 w-4" />}
        />
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/62">
        <Sparkles className="h-4 w-4 text-coral" />
        Your account is the entry point to onboarding, rewards, and profile visibility.
      </div>

      <Button type="submit" loading={isSubmitting}>
        Create your account
      </Button>
    </form>
  );
}
