import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { LoginForm } from "@/sections/auth/login-form";

export default function LoginPage() {
  return (
    <AuthPageShell
      eyebrow="Welcome back"
      title="Your next opportunity already has your name on it."
      description="Sign in to discover curated programs, youth-led events, and the profile momentum that moves you forward."
      stats={[
        { label: "Students activated", value: "18K+" },
        { label: "Live opportunities", value: "240+" },
        { label: "Communities represented", value: "90+" }
      ]}
      spotlightTitle="A platform for future builders"
      spotlightDescription="YouthVibe helps students step into visibility with a product experience that feels closer to a launchpad than a portal."
      accent="aurora"
      footerLabel="No account yet?"
      footerHref="/signup"
      footerText="Create one"
    >
      <LoginForm />
    </AuthPageShell>
  );
}
