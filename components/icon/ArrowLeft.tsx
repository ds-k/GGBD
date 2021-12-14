import * as React from "react";

interface IProps {
  color: string;
}

const ArrowLeft = ({ color }: IProps) => (
  <svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={22} cy={22} r={21.5} fill="#fff" stroke={color} />
    <path
      d="m24 28 1.41-1.41L20.83 22l4.58-4.59L24 16l-6 6 6 6Z"
      fill={color}
    />
  </svg>
);

export default ArrowLeft;
