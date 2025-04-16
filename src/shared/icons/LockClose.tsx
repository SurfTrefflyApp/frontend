import { SVGProps } from "react";

export const LockClose = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#47654D"
      {...props}
    >
      <path
        d="M1.09216 13.353V10.0497C1.09216 8.75527 2.1415 7.70593 3.43591 7.70593H10.4451C13.5639 7.70593 16.0922 10.2342 16.0922 13.353C16.0922 16.4718 13.5639 19.0001 10.4451 19.0001H6.73922C3.62044 19.0001 1.09216 16.4718 1.09216 13.353Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3.90466 7.70588V4.88235V3.11765C3.90466 1.42353 5.15466 1 5.77966 1H8.59216C10.8422 1 11.4047 2.05882 11.4047 2.41176V7M8.12341 15.1176V11.2353"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
