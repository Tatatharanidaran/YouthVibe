"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validateEmail, validatePassword } from "@/utils/validation";

type LoginState = {
  email: string;
  password: string;
};

export function LoginForm() {
  const router = useRouter();
  const [values, setValues] = useState<LoginState>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Partial<LoginState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange =
    (field: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setValues((current) => ({ ...current, [field]: nextValue }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<LoginState> = {
      email: validateEmail(values.email),
      password: validatePassword(values.password)
    };

    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setIsSubmitting(false);
    router.push("/onboarding");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="text-3xl font-semibold tracking-[-0.04em] text-white">Sign in</p>
        <p className="mt-2 text-sm leading-6 text-white/48">
          Continue where your momentum left off.
        </p>
      </div>

      <div className="space-y-4">
        <Input
          label="Email address"
          type="email"
          placeholder="you@example.com"
          value={values.email}
          onChange={handleChange("email")}
          error={errors.email}
          icon={<Mail className="h-4 w-4" />}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange("password")}
          error={errors.password}
          icon={<LockKeyhole className="h-4 w-4" />}
        />
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
        <div className="flex items-center gap-3 text-white/58">
          <ShieldCheck className="h-4 w-4 text-aurora" />
          Secure student access
        </div>
        <Link href="/signup" className="text-white/82 transition hover:text-aurora">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" loading={isSubmitting}>
        Enter YouthVibe
      </Button>
    </form>
  );
}
