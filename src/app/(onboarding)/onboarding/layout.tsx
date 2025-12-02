"use client";
import { ReactNode, useEffect, useState } from "react";
import LayoutOnboardingFooter from "./components/layoutOnBoardFooter";
import OnboardingAnimation from "./components/OnboardingAnimation";
import LayoutOnboardingHeader from "./components/LayoutOnboardingHeader";

// Define your onboarding steps in order
export const ONBOARDING_STEPS = [
  "/onboarding",
  "/onboarding/company-details",
  "/onboarding/select-plan",
];

interface LayoutOnboardWrapperProps {
  children: ReactNode;
}

export default function LayoutOnboardWrapper({
  children,
}: LayoutOnboardWrapperProps) {
  const [isAnimation, setIsAnimation] = useState(true);
  const isOnBoarded = false;

  useEffect(() => {
    if (isOnBoarded) return;
    const timeoutId = setTimeout(() => {
      setIsAnimation(false);
      const onBoardedTimeoutId = setTimeout(() => {}, 1500);
      // Clean up the second timeout as well
      return () => clearTimeout(onBoardedTimeoutId);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const pathNum = 0;
  useEffect(() => {
    if (pathNum !== 0 && pathNum !== -1 && !isOnBoarded) {
      // Add any redirect or side-effect logic here if needed
    }
  }, [pathNum, isOnBoarded]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between p-4 font-var(--font-helvetica-neue) relative overflow-hidden bg-var(--body-gradient)"
      style={{
        background: "var(--body-gradient)",
      }}
    >
      {isAnimation && pathNum === 0 && !isOnBoarded ? (
        <OnboardingAnimation />
      ) : (
        <>
          <LayoutOnboardingHeader num={pathNum + 1} />
          {children}
          {/* TODO: replace hard-coded 2 with the last onboarding step index when wiring real routing */}
          {pathNum !== ONBOARDING_STEPS.length - 1 && <LayoutOnboardingFooter />}
        </>
      )}
    </div>
  );
}
