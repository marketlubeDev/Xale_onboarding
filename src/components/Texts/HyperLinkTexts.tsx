import React from "react";
import Link from "next/link";

interface HyperLinkTextsProps {
  href: string;
  children: React.ReactNode;
}

export default function HyperLinkTexts({ children, href }: HyperLinkTextsProps) {
  return (
    <Link
      href={`/${href}`}
      className="text-b5 font-medium text-link-secondary underline transition-colors"
    >
      {children}
    </Link>
  );
}
