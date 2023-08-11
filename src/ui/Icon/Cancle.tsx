import * as React from 'react';
const SvgCancle = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" {...props}>
    <path
      fill="#393939"
      stroke="#393939"
      d="M11.5 2.058 10.443 1 6.25 5.192 2.058 1 1 2.058 5.192 6.25 1 10.443 2.058 11.5 6.25 7.308l4.193 4.192 1.057-1.057L7.308 6.25 11.5 2.058Z"
    />
  </svg>
);
export default SvgCancle;
