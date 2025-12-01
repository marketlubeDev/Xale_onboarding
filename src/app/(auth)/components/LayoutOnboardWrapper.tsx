import type { ReactNode } from "react";
import LayoutOnboardFooter from "./LayoutOnboardFooter";
import OnboardingAnimation from "./OnboardingAnimation";
import LayoutOnboardingHeader from "./LayoutOnboardingHeader";

type LayoutOnboardWrapperProps = {
  /** Optional content shown between header and footer */
  children?: ReactNode;
  /** Current step number for the progress header (1-based) */
  step?: number;
  /** Total number of steps for the progress header */
  totalSteps?: number;
  /** Whether to show the onboarding animation at the top */
  showAnimation?: boolean;
};

// Presentational-only wrapper for onboarding pages.
// All routing, Redux, and side‑effect logic has been removed.
export default function LayoutOnboardWrapper({
  children,
  step = 1,
  totalSteps = 3,
  showAnimation = false,
}: LayoutOnboardWrapperProps) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-4 font-[var(--font-helvetica-neue)] relative overflow-hidden bg-[var(--body-gradient)]"
      style={{
        background: "var(--body-gradient)",
      }}
    >
      {showAnimation && <OnboardingAnimation />}

      <LayoutOnboardingHeader num={step} total={totalSteps} />

      {children}

      <LayoutOnboardFooter />
    </div>
  );
}
