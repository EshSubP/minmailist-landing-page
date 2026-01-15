'use client';

import React from 'react';

interface ZenLogoProps {
    size?: number;
    className?: string;
}

export default function ZenLogo({ size = 40, className = '' }: ZenLogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`zen-logo ${className}`}
            aria-label="Minmailist Logo"
        >
            {/* Enso-inspired brush stroke circle */}
            <path
                d="M50 8
           C72 8 88 24 90 46
           C92 68 76 88 54 92
           C32 96 12 80 8 58
           C4 36 20 16 42 10"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                style={{
                    strokeDasharray: 280,
                    strokeDashoffset: 0,
                }}
            />
            {/* Small accent dot - representing focus/zen point */}
            <circle
                cx="78"
                cy="22"
                r="4"
                fill="currentColor"
                opacity="0.6"
            />

            <style>{`
        .zen-logo {
          transition: transform 0.4s ease;
        }
        .zen-logo:hover {
          transform: rotate(15deg);
        }
        .zen-logo path {
          transition: stroke-dashoffset 0.8s ease;
        }
      `}</style>
        </svg>
    );
}
