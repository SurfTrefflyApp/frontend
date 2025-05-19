import type { SVGProps } from "react";

export const Trash = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <path
        d="M2 4.18182H7.26316M22 4.18182H17.0877M7.26316 4.18182H17.0877M7.26316 4.18182C7.90675 2.84784 9.25714 2 10.7383 2H13.6126C15.0937 2 16.4441 2.84784 17.0877 4.18182M7.26316 4.18182C6.16344 3.99187 5.15789 4.83862 5.15789 5.95462V15C5.15789 18.866 8.30944 22 12.1754 22C16.0414 22 19.193 18.866 19.193 15V5.95462C19.193 4.83862 18.1874 3.99187 17.0877 4.18182M9.7193 9.27273V16.1818M14.6316 9.27273V16.1818"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
