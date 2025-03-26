export const Back = () => {
  return (
    <svg
      width="25"
      height="28"
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_217_148)">
        <path
          d="M21 2L5.61538 9.69231V9.69231C3.71374 10.6431 3.71374 13.3569 5.61538 14.3077V14.3077L21 22"
          stroke="#4B6A51"
          stroke-width="3"
          stroke-linecap="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_217_148"
          x="0.689148"
          y="0.499695"
          width="23.8112"
          height="27.0006"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_217_148"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_217_148"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
