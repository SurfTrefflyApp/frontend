import { SVGProps } from "react";

export const Edit = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#47654D"
      {...props}
    >
      <g filter="url(#filter0_d_217_147)">
        <path
          d="M9.84862 20.5721L5.6062 16.2907"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M21.2593 7.6226L18.4247 4.76197C18.0385 4.3722 18.0385 3.74401 18.4247 3.35423L20.0472 1.71685C20.4385 1.32201 21.0766 1.32201 21.4679 1.71685L24.3025 4.57748C24.6887 4.96725 24.6887 5.59544 24.3025 5.98522L22.68 7.6226C22.2887 8.01744 21.6506 8.01744 21.2593 7.6226Z"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M20.0601 10.8785L10.5588 20.467C10.1676 20.8618 9.5294 20.8618 9.13815 20.467L5.69747 16.9948C5.31124 16.605 5.31124 15.9768 5.69747 15.587L15.1988 5.99855C15.59 5.60371 16.2282 5.60371 16.6194 5.99855L20.0601 9.4708C20.4463 9.86058 20.4463 10.4888 20.0601 10.8785Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M5 18.1417V19.9437C5 20.1667 5 20.2782 5.01771 20.3711C5.09457 20.774 5.4097 21.0891 5.81262 21.166C5.90547 21.1837 6.01698 21.1837 6.24 21.1837H8.0256C8.50409 21.1837 8.74334 21.1837 8.87976 21.1442C9.49333 20.9663 9.78504 20.2665 9.47953 19.7055C9.4116 19.5807 9.2432 19.4108 8.90641 19.0709L7.12081 17.2689C6.78024 16.9252 6.60996 16.7534 6.48527 16.6842C5.92421 16.3728 5.21922 16.6629 5.03986 17.279C5 17.416 5 17.6579 5 18.1417Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_217_147"
          x="-0.00012207"
          y="0.420715"
          width="29.5923"
          height="29.7632"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_217_147"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_217_147"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
