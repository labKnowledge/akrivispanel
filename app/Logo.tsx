import React from "react";
import Image from "next/image";

// Professional, premium SaaS logo for AkrivisPanel
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/akrivispanel-logo.svg"
      alt="AkrivisPanel Logo"
      width={size}
      height={size}
      priority
      style={{ display: "block" }}
    />
  );
} 