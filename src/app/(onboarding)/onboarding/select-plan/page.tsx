"use client";

import HeadingGradientTextsGreen from "@/src/components/Texts/HeadingGradientTexts";
import PlanToggle from "../components/PlanToggle";
import PricingCard from "../components/PricingCard";
import { useState } from "react";

export default function SelectPlan() {
  const isOnBoarded = false;
  const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly((val) => !val);
  };

  return (
    // 1. Removed 'max-w-md' (it was too narrow for 3 cards).
    // 2. Added 'h-full' and 'overflow-hidden' to force fit within parent container.
    // 3. Used 'justify-between' to spacing items out naturally.
    <div
      className={`w-full h-full flex flex-col items-center justify-between overflow-hidden relative z-10 py-4 ${
        !isOnBoarded ? "onboarding-anim-2" : ""
      }`}
    >
      {/* Top Section: Header & Toggle */}
      <div className="flex flex-col items-center shrink-0">
        <HeadingGradientTextsGreen top="" bottom="Choose Your Plan" />
        <p className="text-b2 text-[var(--color-text-gray)] flex items-center justify-center mt-[-2rem] mb-8">
          Pick a plan that fits your companies needs. Don't Worry - you can
          always upgrade later
        </p>
        <PlanToggle onClick={handleToggle} value={isMonthly} />
      </div>

      {/* Middle Section: Cards 
          The CSS class .plan-container handles the grid.
          We wrap it to ensure it takes available space. 
      */}
      <div className="plan-container">
        <PricingCard />
        <PricingCard type={true} />
        <PricingCard />
      </div>

      {/* Bottom Section: Footer 
          Changed w-[100vw] to w-full to prevent horizontal scrollbar.
      */}
      <div className="flex justify-center items-end h-[4rem] w-full shrink-0 text-b2 flex-col md:flex-row items-center mt-2 md:mt-0">
        Facing an issue while choosing plan?.
        <a
          href="mailto:support@xale.com"
          className="underline ml-2 cursor-pointer text-black"
        >
          Contact Us 
        </a>
      </div>
    </div>
  );
}
