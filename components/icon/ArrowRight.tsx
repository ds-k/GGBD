import * as React from "react";

interface IProps {
  color: string;
}

const ArrowRight = ({ color }: IProps) => (
  <svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle
      cx={22}
      cy={22}
      r={21.5}
      transform="rotate(-180 22 22)"
      fill="#fff"
      stroke={color}
    />
    <path
      d="m20 16-1.41 1.41L23.17 22l-4.58 4.59L20 28l6-6-6-6Z"
      fill={color}
    />
  </svg>
);

export default ArrowRight;
