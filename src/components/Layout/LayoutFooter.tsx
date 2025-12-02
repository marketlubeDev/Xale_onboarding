
import LinkSection from "../footer/LinkSection";
import Image from "next/image";


function LayoutFooter() {
  return (
    <div className="w-full mt-auto relative z-0">
      {/* Illustration Image Section */}
      <div
        className="w-full mb-6 flex justify-center"
        style={{ margin: "0 auto", marginBottom: "1.5rem" }}
      >
        <Image
          src="/assets/images/footer-illustration.svg"
          alt="Footer Illustration"
          // Make the image visually larger and stretch more across the bottom
          width={1600}
          height={350}
          className="w-full max-w-[1600px] h-auto"
        />
      </div>

      {/* Links Section */}
      <LinkSection />
    </div>
  );
}

export default LayoutFooter;
