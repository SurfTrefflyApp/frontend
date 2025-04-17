import type { SVGProps } from "react";

export const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <g filter="url(#filter0_d_300_34)">
        <path
          d="M6 4L26 24M6 24L26 4"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_300_34"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_300_34"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_300_34"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
