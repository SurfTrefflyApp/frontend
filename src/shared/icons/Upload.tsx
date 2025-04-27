import type { SVGProps } from "react";

export const Upload = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <rect
        x="1.59229"
        y="1"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.40179 10.9761H17.7827"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M11.6161 4.80957V17.1905"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
};
