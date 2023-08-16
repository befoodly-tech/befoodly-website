import * as React from 'react';
import { JSX } from 'react/jsx-runtime';
const SvgCancleIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={27} height={27} fill="none" {...props}>
    <path
      fill="#393939"
      stroke="#393939"
      d="M18.5 9.057 17.442 8l-4.192 4.193L9.057 8 8 9.057l4.193 4.193L8 17.442 9.057 18.5l4.193-4.193 4.192 4.193 1.058-1.058-4.193-4.192L18.5 9.057Z"
    />
    <rect width={25.5} height={25.5} x={0.5} y={0.5} stroke="#393939" rx={12.75} />
  </svg>
);
export default SvgCancleIcon;
