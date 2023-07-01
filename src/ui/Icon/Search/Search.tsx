import * as React from 'react';
const SvgSearch = (props: React.SVGProps<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={18} fill="none" {...props}>
    <path
      fill="#828282"
      d="m18.282 17.208-3.492-3.51c1.152-1.44 1.872-3.24 1.872-5.22 0-4.5-3.582-8.1-8.082-8.1-4.5 0-8.1 3.6-8.1 8.1s3.6 8.1 8.1 8.1c1.98 0 3.78-.72 5.22-1.89l3.492 3.51c.09.09.27.18.45.18s.36-.09.45-.18c.36-.27.36-.72.09-.99ZM1.83 8.478c0-3.69 3.06-6.75 6.75-6.75s6.732 3.06 6.732 6.75-3.042 6.75-6.732 6.75c-3.69 0-6.75-3.06-6.75-6.75Z"
    />
  </svg>
);
export default SvgSearch;
