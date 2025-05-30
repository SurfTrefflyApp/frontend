import type { SVGProps } from "react";

export const Arrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      // ariaHidden
      role="img"
      className="iconify iconify--gis"
      preserveAspectRatio="xMidYMid meet"
      color="#000000"
      {...props}
    >
      <path
        d="M87.13 0a2.386 2.386 0 0 0-.64.088a2.386 2.386 0 0 0-.883.463L11.34 62.373a2.386 2.386 0 0 0 1.619 4.219l37.959-1.479l17.697 33.614a2.386 2.386 0 0 0 4.465-.707L89.486 2.79A2.386 2.386 0 0 0 87.131 0z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </svg>
  );
};
