"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@/src/lib/utilities/icons";

// Global error boundary for Next.js App Router.
// Next will render this when an error is thrown in a route/layout.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // You can send this to a logging service instead
    // eslint-disable-next-line no-console
    console.error("App error:", error);
  }, [error]);

  const errorTitle = "Oops!";
  const errorMessage = "Sorry, an unexpected error has occurred.";

  return (
    <html>
      <body className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-blue-50 to-white font-[var(--font-helvetica-neue)] text-center overflow-hidden">
        {/* Background Illustration (Inline SVG: Search / Missing File) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
          <svg
            width="600"
            height="600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] text-[var(--color-black-10)] opacity-[0.05] transform scale-110"
          >
            {/* Document Icon */}
            <path
              d="M9 21H15C19 21 21 19 21 15V9C21 5 19 3 15 3H9C5 3 3 5 3 9V15C3 19 5 21 9 21Z"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Folded Corner */}
            <path
              d="M9 3V9H3"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Magnifying Glass (Search) */}
            <path
              d="M18.5 18.5L22 22"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="11.5"
              cy="11.5"
              r="4.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* "Not Found" Question Mark inside glass */}
            <path
              d="M11.5 10V11.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="11.5" cy="13" r="0.5" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-md w-full flex flex-col items-center animate-in fade-in zoom-in duration-300 relative z-10">
          {/* Main Error Message */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] mb-3 tracking-tight">
            {errorTitle}
          </h2>

          <p className="text-b1 text-[var(--color-text-secondary)] mb-4 max-w-sm mx-auto">
            {errorMessage}
          </p>

          {/* Optional technical message (can remove later) */}
          <p className="text-xs text-gray-400 mb-6 max-w-sm mx-auto break-all">
            {error.message}
          </p>

          <div className="flex flex-col items-center gap-3">
            {/* Reset button: retry same route */}
            <button
              type="button"
              onClick={() => reset()}
              className="flex justify-center items-center bg-[var(--color-black-10)] hover:bg-black text-white font-medium py-3.5 px-8 rounded-full transition-all duration-200 transform hover:scale-[1.01] shadow-lg text-b1-med"
            >
              Try again
            </button>

            {/* Go home link */}
            <Link
              href="/"
              className="inline-flex justify-center items-center text-sm text-[var(--color-text-primary)] hover:text-black"
            >
              Go back home
              <span className="ml-1 flex items-center">
                <ChevronRightIcon color="currentColor" size={18} />
              </span>
            </Link>
          </div>

          {/* Footer Support Link */}
          <div className="mt-8 text-sm text-[var(--color-text-gray)]">
            Need help?{" "}
            <a
              href="mailto:support@xale.com"
              className="underline text-[var(--color-text-primary)] hover:text-black"
            >
              Contact Support
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
