import React from "react";

const checkmark = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        opacity="0.4"
        cx="20"
        cy="20"
        r="19.5"
        transform="rotate(-180 20 20)"
        stroke="white"
      />
      <g clipPath="url(#clip0_144_2075)">
        <g filter="url(#filter0_d_144_2075)">
          <path
            d="M18.7499 22.4709L25.6105 15.3333L26.6667 16.4312L18.7499 24.6667L14 19.7255L15.0554 18.6277L18.7499 22.4709Z"
            fill="url(#paint0_linear_144_2075)"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_144_2075"
          x="10"
          y="13.3333"
          width="20.6666"
          height="17.3333"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite
            in2="hardAlpha"
            operator="out"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.984314 0 0 0 0 0.788235 0 0 0 0 0.294118 0 0 0 0.35 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_144_2075"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_144_2075"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_144_2075"
          x1="20.3333"
          y1="15.3333"
          x2="20.3333"
          y2="24.6667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD15C" />
          <stop
            offset="1"
            stopColor="#FDC841"
          />
        </linearGradient>
        <clipPath id="clip0_144_2075">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(10 10)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default checkmark;
