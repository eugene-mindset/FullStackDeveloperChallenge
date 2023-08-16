import React from "react";

interface Props {
  color?: string;
  style?: React.CSSProperties;
}

export const ReplaceIcon = (props: Props) => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={props?.style}
    >
      <path
        d="M19.6666 2.33331V7.33332M19.6666 7.33332H14.6666M19.6666 7.33332L15.7999 3.69998C14.9043 2.80391 13.7963 2.14932 12.5792 1.79729C11.3622 1.44527 10.0758 1.40727 8.84016 1.68686C7.60447 1.96645 6.45975 2.55451 5.51281 3.39616C4.56586 4.23782 3.84756 5.30564 3.42492 6.49998M1.33325 15.6666V10.6666M1.33325 10.6666H6.33325M1.33325 10.6666L5.19992 14.3C6.09554 15.1961 7.20356 15.8506 8.42059 16.2027C9.63762 16.5547 10.924 16.5927 12.1597 16.3131C13.3954 16.0335 14.5401 15.4455 15.487 14.6038C16.434 13.7621 17.1523 12.6943 17.5749 11.5"
        stroke={props?.color || "currentColor"}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
