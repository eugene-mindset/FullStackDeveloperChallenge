import React from "react";

interface Props {
  color?: string;
  style?: React.CSSProperties;
}

export const CloseIcon = (props: Props) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props?.style}
    >
      <path
        d="M11 1L1 11M1 1L11 11"
        stroke={props?.color || "currentColor"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
