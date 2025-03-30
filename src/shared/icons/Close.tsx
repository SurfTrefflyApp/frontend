import { SVGProps } from "react";

export const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#FEE2E2"
      {...props}
    >
      <g filter="url(#filter0_d_372_1610)">
        <path
          d="M6 4.5L24 22.5M6 22.5L24 4.5"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};
