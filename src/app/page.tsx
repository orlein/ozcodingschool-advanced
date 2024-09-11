import type { Metadata } from "next";
import { OnboardingWizard } from "@/components/onboarding-wizard";

export default function IndexPage() {
  return (
    <div>
      <button>Button Click!</button>
      <OnboardingWizard />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
