import { useMutation } from "@tanstack/react-query";
import axiosInstance from "@/src/lib/axios/axiosConfig";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout, setTokenAndUser } from "@/src/lib/features/authSlice";
import { useEffect } from "react";

export default function useVerify() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutate, isPending, data, error } = useMutation({
    mutationFn: async () => {
      // You can pass payload here if needed, e.g., OTP code
      const response = await axiosInstance.post("/auth/verify");
      return response.data;
    },
    onSuccess: (res) => {
      const { user, token } = res;
      dispatch(setTokenAndUser({ token, user }));
    },
    onError: (e) => {
      console.log(e, "e");

      dispatch(logout());
      router.push("/login");
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  // You expose 'verify' (which is the mutate function) to your UI
  return { verify: mutate, isLoading: isPending, user: data?.user, error };
}
