import type { SVGProps } from "react";

export const NotFound = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="240"
      height="228"
      viewBox="0 0 240 228"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_614_2306)">
        <circle
          cx="85.5752"
          cy="82"
          r="74"
          fill="white"
          fillOpacity="0.8"
          shapeRendering="crispEdges"
        />
        <circle
          cx="85.5752"
          cy="82"
          r="74"
          stroke="#4B6A51"
          strokeWidth="15"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M157.575 144L229.575 218"
        stroke="#4B6A51"
        strokeWidth="20"
        strokeLinecap="round"
      />
      <line
        x1="142.111"
        y1="128.464"
        x2="166.111"
        y2="152.464"
        stroke="#4B6A51"
        strokeWidth="10"
      />
      <line
        x1="221.839"
        y1="195.414"
        x2="206.989"
        y2="210.263"
        stroke="#2F312E"
        strokeWidth="4"
      />
      <line
        x1="226.839"
        y1="200.414"
        x2="211.989"
        y2="215.263"
        stroke="#2F312E"
        strokeWidth="4"
      />
      <line
        x1="231.839"
        y1="205.414"
        x2="216.989"
        y2="220.263"
        stroke="#2F312E"
        strokeWidth="4"
      />
      <defs>
        <filter
          id="filter0_d_614_2306"
          x="0.0751953"
          y="0.5"
          width="171"
          height="171"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_614_2306"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_614_2306"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
