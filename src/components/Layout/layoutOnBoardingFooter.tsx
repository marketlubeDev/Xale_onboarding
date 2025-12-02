"use client";

import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";
import { LightGreenBtn } from "@/src/components/Buttons/LightGreenButton";
import { LeftArrowIcon, RightArrowIcon } from "@/src/lib/utilities/icons";
import { useRouter } from "next/navigation";
import LinkSection from "@/src/components/footer/LinkSection";
import Image from "next/image";
import { useGetPathNum } from "@/src/hooks/useGetPathNum";

const footerIllustration1 = "/assets/images/footerIllustration-1.svg";
const footerIllustration2 = "/assets/images/footerIllustration-2.svg";
const footerIllustration3 = "/assets/images/footerIllustration-3.svg";

  const IMAGES = [footerIllustration1, footerIllustration2, footerIllustration3];

export const ONBOARDING_STEPS = [
    "/onboarding",
    "/onboarding/company-details",
    "/onboarding/select-plan",
  ];

function LayoutOnboardingFooter() {

  const isOnBoarded = false;
  const router = useRouter();
    const { pathNum } = useGetPathNum(ONBOARDING_STEPS);

    const currentImage =
      pathNum >= 0 && pathNum < IMAGES.length ? IMAGES[pathNum] : IMAGES[0];

    const handleNext = () => {
      // If we are not at the last step, go to the next one
      if (pathNum < ONBOARDING_STEPS.length - 1) {
        router.push(ONBOARDING_STEPS[pathNum + 1]);
      } else {
        // Logic for the final step (e.g., navigate to dashboard)
        router.push("/dashboard");
      }
    };

    const handleBack = () => {
      // Explicitly navigate to the previous step in the list
      if (pathNum > 0) {
        router.push(ONBOARDING_STEPS[pathNum - 1]);
      }
    };

  // Determine if we are on the first step to hide the Back button
  const isFirstStep = pathNum === 0;

  return (
    <div
      className={`w-full mt-auto relative z-0 ${
        !isOnBoarded ? "onboarding-anim-2" : ""
      }`}
    >
      <div
        className="w-[90vw] m-auto grid grid-cols-3 items-end gap-8 mb-10 px-6"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Back Button Section */}
        <div className="flex justify-start">
          <LightGreenBtn
            style={{
              width: "15rem",
              opacity: isFirstStep ? "0" : "1",
              // Critical: prevent clicking when hidden
              pointerEvents: isFirstStep ? "none" : "auto",
            }}
            Icon={LeftArrowIcon}
            onClick={handleBack}
          >
            Back
          </LightGreenBtn>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center w-full mb-2">
          <Image
          src={currentImage}
            alt="Footer Illustration"
            width={800}
            height={800}
            className="h-auto object-contain"
            style={{ maxWidth: "100%", maxHeight: "800px" }}
          />
        </div>

        {/* Continue Button Section */}
        <div className="flex justify-end">
          <PrimaryButton
            style={{ width: "15rem" }}
            onClick={handleNext}
            Icon={RightArrowIcon}
          >
            {/* Change text if it's the last step (optional) */}
            {pathNum === ONBOARDING_STEPS.length - 1 ? "Finish" : "Continue"}
          </PrimaryButton>
        </div>
      </div>

      {/* Links Section */}
      <LinkSection />
    </div>
  );
}

export default LayoutOnboardingFooter;
