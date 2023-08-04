import * as React from 'react';
const SvgEllipse = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={11} height={11} fill="none" {...props}>
    <circle cx={5.94} cy={5.5} r={5} fill="#15CA6A" />
  </svg>
);
export default SvgEllipse;
