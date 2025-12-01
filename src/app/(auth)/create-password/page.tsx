"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";


// Import your custom icons
import axiosInstance from "@/src/lib/axios/axiosConfig";
import { useEffect } from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import HeadingGradientTextsGreen from "@/src/components/Texts/HeadingGradientTexts";
import LargeInput from "@/src/components/Inputs/LargeInputs";
import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";
import { AppleIcon, FaceBookIcon, GoogleIcon } from "@/src/lib/utilities/icons";
import { useRouter } from "next/navigation";

// --- Validation Schema ---
const setupPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SetupPasswordFormData = z.infer<typeof setupPasswordSchema>;

export default function CreatePasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = searchParams.get("user");

//   useEffect(() => {
//     if (!user) {
//       router.push("/login");
//       toast.error("Please login first!");
//     }
//   }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupPasswordFormData>({
    resolver: zodResolver(setupPasswordSchema),
  });

  const { mutate, isPending } = {mutate: () => {}, isPending: false};

  const onSubmit = (data: SetupPasswordFormData) => {
    console.log(data);
  };

  return (
    <LayoutWrapper>
      <div className="w-full max-w-md flex flex-col items-center justify-center grow mt-10 z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <HeadingGradientTextsGreen
            top="Secure your CRM"
            bottom="Set a password to continue"
            style={{ marginBottom: "0rem" }}
          />
        </div>

        {/* Form Section */}
        <div className="w-full space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Password Field */}
            <LargeInput
              type="password"
              placeholder="Set password"
              error={errors.password}
              // passing validation via register
              {...register("password", {
                required: "Password is required",
              })}
            />

            {/* Confirm Password Field */}
            <LargeInput
              type="password"
              placeholder="Confirm Password"
              error={errors.password}
              // passing validation via register
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
            />

            <PrimaryButton
              type="submit"
              disabled={isPending}
              style={{ width: "100%" }}
            >
              {isPending ? "Setting Password..." : "Set Password"}
            </PrimaryButton>
          </form>
          <div className="flex justify-center gap-4 opacity-0">
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
