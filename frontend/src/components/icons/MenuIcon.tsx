import React from "react";

interface Props {
  color?: string;
  style?: React.CSSProperties;
}

export const MenuIcon = (props: Props) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props?.style}
    >
      <path
        d="M1.5 6H16.5M1.5 1H16.5M1.5 11H16.5"
        stroke={props?.color || "currentColor"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
