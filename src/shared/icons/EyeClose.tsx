import type { IconProps } from "@/shared/icons/type";

export const EyeClose = (props: IconProps) => {
  return (
    <svg
      width="23"
      height="9"
      viewBox="0 0 23 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ADCFB1"
      {...props}
    >
      <mask
        id="mask0_300_71"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="7"
      >
        <rect width="23" height="7" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_300_71)">
        <path
          d="M21.5 0C21.5 0.493145 21.2665 1.04969 20.702 1.65118C20.1373 2.25298 19.2979 2.83469 18.2535 3.34372C16.1632 4.36251 13.4381 5 11 5C8.56477 5 5.97285 4.36392 4.01718 3.3541C1.97807 2.3012 1 1.05483 1 0C1 -1.05483 1.97807 -2.3012 4.01718 -3.3541C5.97285 -4.36393 8.56477 -5 11 -5C13.4381 -5 16.1632 -4.36251 18.2535 -3.34372C19.2979 -2.83469 20.1373 -2.25298 20.702 -1.65118C21.2665 -1.04969 21.5 -0.493145 21.5 0Z"
          strokeWidth="2"
          stroke="currentColor"
        />
      </g>
      <path
        d="M19 4L20 5.5M14 5.5L14.5 7.5M8.5 5.5L8 7.5M3 4L2 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
