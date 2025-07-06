import React from "react";
import Image from "next/image";

// Professional, premium SaaS logo for FastPanel
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/fastpanel-logo.svg"
      alt="FastPanel Logo"
      width={size}
      height={size}
      priority
      style={{ display: "block" }}
    />
  );
} 