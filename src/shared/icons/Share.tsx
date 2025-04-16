import { SVGProps } from "react";

export const Share = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#47654D"
      {...props}
    >
      <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="4" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="4" r="3" stroke="currentColor" strokeWidth="2" />
      <line
        x1="6.73045"
        y1="10.7017"
        x2="13.2869"
        y2="14.5764"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="6.50386"
        y1="9.13176"
        x2="13.5039"
        y2="5.13176"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};
