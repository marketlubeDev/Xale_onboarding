"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Import your custom icons

import LayoutWrapper from "@/src/components/Layout/LayoutWrapper";
import HeadingGradientTextsGreen from "@/src/components/Texts/HeadingGradientTexts";
import LargeInput from "@/src/components/Inputs/LargeInputs";
import { PrimaryButton } from "@/src/components/Buttons/PrimaryButton";
import { AppleIcon, FaceBookIcon, GoogleIcon } from "@/src/lib/utilities/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { usePreventBack } from "@/src/hooks/usePreventBack";
import useVerify from "@/src/hooks/useVerify";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/src/lib/axios/axiosConfig";

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
  usePreventBack();
  // const { verify } = useVerify();
  const router = useRouter();


  // useEffect(() => {
  //   verify();
  // }, [verify]);

  const [user, setUser] = useState<{ email: string; profileCompletion?: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // <-- FIX: avoid redirect before hydration

  // Read user from localStorage safely
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem("pendingUser");

      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed?.email) {
          setUser(parsed);
          setLoading(false);
          return;
        }
      }
    } catch (e) {
      console.error("Failed to read pendingUser", e);
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
      toast.error("Please login first!");
    }
  }, [user, router, loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetupPasswordFormData>({
    resolver: zodResolver(setupPasswordSchema),
  });


  const { mutate, isPending } = useMutation({
    mutationFn: (data: SetupPasswordFormData) => {
      return axiosInstance.post("/auth/create-password", data);
    },
    onSuccess: (_) => {
      toast.success("Password set successfully!");
      router.push("/");
    },
    onError: (error: any) => {
      console.log(error, "error");

      const message =
        error?.response?.data?.message ||
        error?.message ||
        "An error occurred. Please try again.";
      toast.error(message);
      router.push("/onboarding");
    },
  });

  const onSubmit = (data: SetupPasswordFormData) => {
    mutate(data);
  };

  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
  };


  if (loading) {
    return (
      <LayoutWrapper>
        <div className="w-full max-w-lg flex justify-center items-center h-[400px]">
          <p>Loading...</p>
        </div>
      </LayoutWrapper>
    );
  }

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
          <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
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
              error={errors.confirmPassword}
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
