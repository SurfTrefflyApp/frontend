import type { IconProps } from "@/shared/icons/type";

export const Lock = (props: IconProps) => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ADCFB1"
      {...props}
    >
      <path
        d="M1 16.098V12.0086C1 10.4553 2.2592 9.19608 3.8125 9.19608H12.098C15.9099 9.19608 19 12.2862 19 16.098C19 19.9099 15.9099 23 12.098 23H7.90196C4.09011 23 1 19.9099 1 16.098Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4.375 9.19608V5.7451V3.58824C4.375 1.51765 5.875 1 6.625 1H10C12.7 1 13.375 2.29412 13.375 2.72549V9.62745M9.4375 18.2549V13.5098"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
