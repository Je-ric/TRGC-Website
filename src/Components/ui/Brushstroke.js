import { useId } from "react";

export default function Brushstroke({ children, colors = ["#ffb700", "#ff6f61"] }) {
  const gradientId = useId(); // unique per component

  return (
    <div className="relative inline-block px-4 py-2 font-bold">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`bgGradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="100%" stopColor={colors[1]} />
          </linearGradient>

          <filter id={`canvasTexture-${gradientId}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="5" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="#ffffff" surfaceScale="2" result="light">
              <feDistantLight azimuth="45" elevation="60" />
            </feDiffuseLighting>
          </filter>
        </defs>

        <rect
          width="100%"
          height="100%"
          rx="14"
          fill={`url(#bgGradient-${gradientId})`}
          filter={`url(#canvasTexture-${gradientId})`}
          opacity="0.85"
        />
      </svg>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
