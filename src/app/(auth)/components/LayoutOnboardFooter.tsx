
import footerIllustration1 from "../../../assets/images/footerIllustration-1.svg";
import footerIllustration2 from "../../../assets/images/footerIllustration-2.svg";
import footerIllustration3 from "../../../assets/images/footerIllustration-3.svg";
import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";
import LinkSection from "../footer/LinkSection";
import { LightGreenBtn } from "@/src/components/Buttons/LightGreenButton";
import { LeftArrowIcon, RightArrowIcon } from "@/src/lib/utilities/icons";

const IMAGES = [footerIllustration1, footerIllustration2, footerIllustration3];

// Presentational-only footer.  
// All routing, Redux, and onboarding-step logic has been removed.
function LayoutOnboardFooter() {
  const currentImage = IMAGES[0];

  return (
    <div
      className="w-full mt-auto relative z-0"
    >
      <div
        className="w-[90vw] m-auto grid grid-cols-3 items-end gap-8 mb-10 px-6"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        {/* Back Button Section */}
        <div className="flex justify-start">
          <LightGreenBtn style={{ width: "15rem" }} Icon={LeftArrowIcon}>
            Back
          </LightGreenBtn>
        </div>

        {/* Illustration Section */}
        <div className="flex justify-center w-full mb-2">
          <img
            src={currentImage}
            alt="Footer Illustration"
            className="h-auto object-contain"
            style={{ maxWidth: "100%", maxHeight: "150px" }}
          />
        </div>

        {/* Continue Button Section */}
        <div className="flex justify-end">
          <PrimaryButton style={{ width: "15rem" }} Icon={RightArrowIcon}>
            Continue
          </PrimaryButton>
        </div>
      </div>

      {/* Links Section */}
      <LinkSection />
    </div>
  );
}

export default LayoutOnboardFooter;
