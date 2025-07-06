import React from "react";

// Professional, premium SaaS logo for FastPanel
export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="FastPanel Logo"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="fp-logo-gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#0a2540" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#1e40af" floodOpacity="0.12" />
        </filter>
      </defs>
      {/* Abstract, dynamic mark: stylized F and P interlocking */}
      <rect x="4" y="4" width="40" height="40" rx="12" fill="url(#fp-logo-gradient)" filter="url(#shadow)" />
      <path d="M16 32V16h8c4 0 8 2 8 8s-4 8-8 8h-8z" fill="#fff" fillOpacity="0.95" />
      <path d="M16 16h8c2.5 0 4 1.5 4 4s-1.5 4-4 4h-8v-8z" fill="#2563eb" fillOpacity="0.85" />
      <circle cx="32" cy="20" r="3" fill="#fff" fillOpacity="0.9" />
      {/* Subtle border */}
      <rect x="4" y="4" width="40" height="40" rx="12" stroke="#fff" strokeWidth="1.5" opacity="0.12" />
    </svg>
  );
} 