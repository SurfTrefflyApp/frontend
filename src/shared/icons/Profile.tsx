import type { SVGProps } from "react";

export const Profile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <path
        d="M28 15C28 22.1797 22.1797 28 15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle
        cx="15.3333"
        cy="10.6667"
        r="3.16667"
        stroke="currentColor"
        strokeWidth="3"
      />
      <mask
        id="mask0_317_785"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        x="7"
        y="15"
        width="17"
        height="8"
      >
        <rect
          x="8.83331"
          y="16.8334"
          width="13"
          height="4.33333"
          fill="#D9D9D9"
          stroke="#1A1C1A"
          strokeWidth="3"
        />
      </mask>
      <g mask="url(#mask0_317_785)">
        <path
          d="M21.8333 19.7012C21.8333 21.084 21.2497 22.8284 20.1204 24.2151C19.0148 25.5726 17.4649 26.5 15.5294 26.5C13.5793 26.5 11.9177 25.5581 10.7085 24.175C9.47725 22.7667 8.83331 21.0323 8.83331 19.7012C8.83331 19.0675 8.97746 18.66 9.16725 18.3755C9.36058 18.0857 9.67717 17.8102 10.2031 17.5697C11.3187 17.0596 13.0842 16.8334 15.5294 16.8334C17.9835 16.8334 19.6255 17.0626 20.6224 17.5521C21.0814 17.7774 21.3534 18.0348 21.5239 18.3176C21.6977 18.6058 21.8333 19.0326 21.8333 19.7012Z"
          stroke="currentColor"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
