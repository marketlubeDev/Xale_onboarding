
import LinkSection from "../footer/LinkSection";
import Image from "next/image";


function LayoutFooter() {
  return (
    <div className="w-full mt-auto relative z-0">
      {/* Illustration Image Section */}
      <div
        className="w-[80vw] mb-10 flex justify-center "
        style={{ margin: "0 auto", marginBottom: "3rem" }}
      >
        <Image src="/assets/images/footer-illustration.svg" alt="Footer Illustration" width={1000} height={1000} />

      </div>

      {/* Links Section */}
      <LinkSection />
    </div>
  );
}

export default LayoutFooter;
