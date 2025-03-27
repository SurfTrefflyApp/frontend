import { IconProps } from "@/shared/icons/type";

export const EyeOpen = (props: IconProps) => {
  return (
    <svg
      width="23"
      height="12"
      viewBox="0 0 23 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ADCFB1"
      {...props}
    >
      <path
        d="M21.5 8C21.5 8.49314 21.2665 9.04969 20.702 9.65118C20.1373 10.253 19.2979 10.8347 18.2535 11.3437C16.1632 12.3625 13.4381 13 11 13C8.56477 13 5.97285 12.3639 4.01718 11.3541C1.97807 10.3012 1 9.05483 1 8C1 6.94517 1.97807 5.6988 4.01718 4.6459C5.97285 3.63607 8.56477 3 11 3C13.4381 3 16.1632 3.63749 18.2535 4.65628C19.2979 5.16531 20.1373 5.74702 20.702 6.34882C21.2665 6.95031 21.5 7.50685 21.5 8Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <ellipse cx="11" cy="8.00006" rx="2.08333" ry="2" fill="currentColor" />
      <path
        d="M3 4.5L2 3M8 3L7.5 1M13.5 3L14 1M19 4.5L20 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
