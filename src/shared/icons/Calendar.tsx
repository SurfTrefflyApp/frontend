import { SVGProps } from "react";

export const Calendar = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#4B6A51"
      {...props}
    >
      <path
        d="M4 10.6888C4 7.92742 6.23858 5.68884 9 5.68884H21.6667C24.4281 5.68884 26.6667 7.92742 26.6667 10.6888V12.0888H4V10.6888Z"
        fill="#C6CCC4"
      />
      <path
        d="M20.6667 30H10C6.68629 30 4 27.3137 4 24V11.5555C4 8.24183 6.68629 5.55554 9.99999 5.55554H20.6667C23.9804 5.55554 26.6667 8.24183 26.6667 11.5555V24C26.6667 27.3137 23.9804 30 20.6667 30Z"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M12 2C12 0.89543 11.1046 0 10 0C8.89543 0 8 0.89543 8 2H12ZM12 6.26667V2H8V6.26667H12Z"
        fill="currentColor"
      />
      <path
        d="M22 2C22 0.89543 21.1046 0 20 0C18.8954 0 18 0.89543 18 2H22ZM22 6.26667V2H18V6.26667H22Z"
        fill="currentColor"
      />
      <path d="M3 13H28" stroke="currentColor" strokeWidth="4" />
      <rect
        x="9"
        y="17"
        width="4.66667"
        height="4.97778"
        rx="1"
        fill="#C6CCC4"
      />
      <path
        d="M10 16.5H12C12.8284 16.5 13.5 17.1716 13.5 18V20.4C13.5 21.2284 12.8284 21.9 12 21.9H10C9.17157 21.9 8.5 21.2284 8.5 20.4V18C8.5 17.1716 9.17157 16.5 10 16.5Z"
        stroke="currentColor"
      />
    </svg>
  );
};
