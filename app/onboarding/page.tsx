import { AuthPageShell } from "@/components/auth/auth-page-shell";
import { InterestSelection } from "@/sections/onboarding/interest-selection";

export default function OnboardingPage() {
  return (
    <AuthPageShell
      eyebrow="Personalize your start"
      title="Shape a YouthVibe experience that feels built around your momentum."
      description="Select the themes that match your energy so your dashboard starts with better recommendations, stronger signals, and the right communities."
      stats={[
        { label: "Interest paths", value: "9" },
        { label: "Curated signals", value: "Daily" },
        { label: "Profile relevance", value: "High" }
      ]}
      spotlightTitle="Your feed gets sharper from here"
      spotlightDescription="Every interest you choose improves what YouthVibe surfaces next, from events and opportunities to profile cues and reward paths."
      accent="aurora"
      footerLabel="Want to update this later?"
      footerHref="/profile"
      footerText="Edit in profile"
      panelClassName="max-w-3xl xl:max-w-[58rem]"
    >
      <InterestSelection />
    </AuthPageShell>
  );
}
