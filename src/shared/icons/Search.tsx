import type { SVGProps } from "react";

export const Search = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.6">
        <path
          d="M6 1C8.72746 1 11 3.30391 11 6.22266C10.9998 9.14119 8.72732 11.4443 6 11.4443C3.27268 11.4443 1.00023 9.14119 1 6.22266C1 3.30391 3.27254 1 6 1Z"
          fill="#C6E9CA"
          fillOpacity="0.2"
          stroke="#4B6A51"
          strokeWidth="2"
        />
        <path
          d="M17.3999 16.8001C17.8298 17.1468 18.4469 17.0697 18.7783 16.6279C19.1097 16.186 19.0298 15.5468 18.5999 15.2001L17.3999 16.8001ZM9.68564 10.5778L17.3999 16.8001L18.5999 15.2001L10.8856 8.97783L9.68564 10.5778Z"
          fill="#4B6A51"
        />
      </g>
    </svg>
  );
};
