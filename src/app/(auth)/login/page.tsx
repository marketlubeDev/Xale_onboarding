"use client";

import LayoutWrapper from "../components/LayoutWrapper";
import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";
import HeadingGradientTextsGreen from "@/src/components/Texts/HeadingGradientTexts";
import LargeInput from "@/src/components/Inputs/LargeInputs";
import HyperLinkTexts from "@/src/components/Texts/HyperLinkTexts";
import { AppleIcon, FaceBookIcon, GoogleIcon } from "@/src/lib/utilities/icons";

export default function LoginPage() {
  return (
    <LayoutWrapper>
      {/* Main Content Content Wrapper */}
      <div className="w-full max-w-md flex flex-col items-center justify-center grow mt-10 z-10">
        {/* Header Section */}
        <HeadingGradientTextsGreen
          top="Hey there !"
          bottom="Let's get you into your CRM"
          style={{ marginBottom: "5rem" }}
        />

        {/* Form Section (UI only) */}
        <div className="w-full space-y-6 ">
          <form className="space-y-5">
            {/* Email Field */}
            <LargeInput
              type="email"
              placeholder="Enter email"
            />

            {/* Password Field */}
            <LargeInput
              type="password"
              placeholder="Enter password"
            />

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <HyperLinkTexts href="forgot-password">
                Forgot Password?
              </HyperLinkTexts>
            </div>
            {/* Submit Button - Black Pill Shape */}
            <PrimaryButton
              type="submit"
              style={{ width: "100%" }}
            >
              Login
            </PrimaryButton>
            <div className="flex justify-center">
              <HyperLinkTexts href="signup">Login With OTP</HyperLinkTexts>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink-0 mx-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
              OR
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="text-center text-sm text-gray-500 mb-4 ">
            Continue with
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4">
            {/* Apple */}
            <AppleIcon />
            {/* Google */}
            <GoogleIcon />
            {/* Facebook */}
            <FaceBookIcon />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}
