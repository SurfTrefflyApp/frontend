import { SVGProps } from "react";

export const DefaultUser = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="163"
      height="165"
      viewBox="0 0 163 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#5B685C"
      {...props}
    >
      <g filter="url(#filter0_d_302_134)">
        <ellipse cx="81.5" cy="80.4312" rx="77.5" ry="78.211" fill="#EEEEEA" />
      </g>
      <path
        d="M103.5 61.7615C103.5 74.8798 92.9658 85.4908 80 85.4908C67.0342 85.4908 56.5 74.8798 56.5 61.7615C56.5 48.6432 67.0342 38.0321 80 38.0321C92.9658 38.0321 103.5 48.6432 103.5 61.7615Z"
        stroke="currentColor"
        strokeWidth="3"
      />
      <mask
        id="mask0_302_134"
        maskUnits="userSpaceOnUse"
        x="25"
        y="78"
        width="113"
        height="47"
      >
        <rect x="25" y="78.9176" width="113" height="45.4128" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_302_134)">
        <path
          d="M118.5 108.914C118.5 117.328 115.05 127.412 108.586 135.38C102.145 143.319 92.7917 149.069 80.9806 149.069C69.1548 149.069 59.2976 143.305 52.3609 135.34C45.4025 127.351 41.5 117.277 41.5 108.914C41.5 104.765 42.459 101.502 44.1798 98.9123C45.904 96.3177 48.4669 94.2878 51.8556 92.7321C58.697 89.5913 68.6577 88.4909 80.9806 88.4909C93.3125 88.4909 102.757 89.5944 109.088 92.7144C112.213 94.2548 114.536 96.2668 116.09 98.8545C117.648 101.448 118.5 104.73 118.5 108.914Z"
          stroke="currentColor"
          strokeWidth="3"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_302_134"
          x="0"
          y="0.220184"
          width="163"
          height="164.422"
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
            result="effect1_dropShadow_302_134"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_302_134"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
