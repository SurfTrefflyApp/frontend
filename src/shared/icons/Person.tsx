import { IconProps } from "@/shared/icons/type";

export const Person = (props: IconProps) => {
  return (
    <svg
      width="34"
      height="27"
      viewBox="0 0 34 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#ADCFB1"
      {...props}
    >
      <circle
        cx="16.5487"
        cy="7.52212"
        r="6.52212"
        stroke="currentColor"
        strokeWidth="2"
      />
      <mask
        id="mask0_165_88"
        maskUnits="userSpaceOnUse"
        x="0"
        y="12"
        width="34"
        height="15"
      >
        <rect
          x="1"
          y="13.6372"
          width="32"
          height="11.5398"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
        />
      </mask>
      <g mask="url(#mask0_165_88)">
        <path
          d="M27.5841 21.5807C27.5841 23.9524 26.5961 26.8364 24.7265 29.1198C22.8731 31.3837 20.205 33 16.8438 33C13.4728 33 10.6481 31.3741 8.64328 29.0931C6.6235 26.7951 5.51331 23.9178 5.51331 21.5807C5.51331 20.4337 5.77944 19.5734 6.22559 18.9081C6.67433 18.2389 7.35542 17.6924 8.30625 17.2598C10.2501 16.3755 13.1446 16.0443 16.8438 16.0443C20.5488 16.0443 23.2788 16.3776 25.0615 17.2481C25.9265 17.6706 26.5367 18.2052 26.9394 18.8695C27.3441 19.5371 27.5841 20.4102 27.5841 21.5807Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};
