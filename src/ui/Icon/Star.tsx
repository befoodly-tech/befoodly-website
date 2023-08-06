import * as React from 'react';
const SvgStar = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <path
      fill="#15B15E"
      fillRule="evenodd"
      d="m4.302 9.737-.826 4.814L7.8 12.278l4.324 2.273-.826-4.814 3.498-3.41-4.834-.702L7.8 1.245l-2.162 4.38-4.834.702 3.498 3.41Zm5.707-.42.52 3.04L7.8 10.922l-2.73 1.435.521-3.04-2.208-2.152 3.052-.444L7.8 3.956 9.165 6.72l3.052.444-2.209 2.153Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgStar;
