import * as React from 'react';
const SvgCalendar = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" {...props}>
    <path
      fill="#393939"
      d="M3.2 7.2h1.6v1.6H3.2V7.2Zm11.2-4v11.2c0 .88-.72 1.6-1.6 1.6H1.6A1.6 1.6 0 0 1 0 14.4L.008 3.2c0-.88.704-1.6 1.592-1.6h.8V0H4v1.6h6.4V0H12v1.6h.8c.88 0 1.6.72 1.6 1.6ZM1.6 4.8h11.2V3.2H1.6v1.6Zm11.2 9.6v-8H1.6v8h11.2ZM9.6 8.8h1.6V7.2H9.6v1.6Zm-3.2 0H8V7.2H6.4v1.6Z"
    />
  </svg>
);
export default SvgCalendar;
