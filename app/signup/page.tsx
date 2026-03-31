import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { SignupForm } from "@/sections/auth/signup-form";

export default function SignupPage() {
  return (
    <AuthPageShell
      eyebrow="Join the movement"
      title="Build a student identity that opens doors before graduation."
      description="Create your YouthVibe account to unlock opportunities, rewards, events, and a profile built for ambition."
      stats={[
        { label: "Partner programs", value: "120+" },
        { label: "Skills showcased", value: "1.8K+" },
        { label: "Rewards redeemed", value: "34K" }
      ]}
      spotlightTitle="Built for students with momentum"
      spotlightDescription="From creators to community leaders, YouthVibe turns interests into visible progress with a product designed to feel sharp, modern, and alive."
      accent="coral"
      footerLabel="Already have an account?"
      footerHref="/login"
      footerText="Sign in"
    >
      <SignupForm />
    </AuthPageShell>
  );
}
