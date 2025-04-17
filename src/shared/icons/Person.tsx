import type { IconProps } from "@/shared/icons/type";

export const Person = (props: IconProps) => {
  return (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ADCFB1"
      {...props}
    >
      <path
        d="M13.7013 6.24711C13.7013 8.91501 11.6525 10.9942 9.22566 10.9942C6.79887 10.9942 4.75 8.91501 4.75 6.24711C4.75 3.57921 6.79887 1.5 9.22566 1.5C11.6525 1.5 13.7013 3.57921 13.7013 6.24711Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <mask
        id="mask0_838_687"
        maskUnits="userSpaceOnUse"
        x="0"
        y="10"
        width="18"
        height="11"
      >
        <rect
          x="1"
          y="11.5"
          width="16"
          height="8"
          fill="#D9D9D9"
          stroke="currentColor"
          strokeWidth="2"
        />
      </mask>
      <g mask="url(#mask0_838_687)">
        <path
          d="M17 17.0783C17 18.8591 16.2779 21.036 14.9108 22.7577C13.5585 24.4607 11.6325 25.6539 9.22064 25.6539C6.79859 25.6539 4.7536 24.4504 3.28771 22.7308C1.80846 20.9955 1 18.8254 1 17.0783C1 16.225 1.19175 15.6037 1.49766 15.1334C1.80487 14.661 2.27509 14.2674 2.95135 13.9502C4.34762 13.2953 6.45962 13.0385 9.22064 13.0385C11.9876 13.0385 13.972 13.2974 15.2442 13.938C15.8535 14.2449 16.2721 14.6265 16.5475 15.0949C16.8258 15.5683 17 16.2024 17 17.0783Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
