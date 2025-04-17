import type { SVGProps } from "react";

export const Filters = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <path
        d="M8 15H19M1 15H4M4 15V17M4 15V13M18 9H19M1 9H14M14 9V11M14 9V7M12 3H19M1 3H8M8 3V5M8 3V1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
