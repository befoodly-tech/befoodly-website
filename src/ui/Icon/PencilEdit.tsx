import * as React from 'react';
const SvgPencilEdit = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" {...props}>
    <path
      fill="#393939"
      fillRule="evenodd"
      d="M14.667 13.333V8.667h-1.334v4.666H2.667V2.667h4.666V1.333H2.667c-.737 0-1.334.597-1.334 1.334v10.666c0 .737.597 1.334 1.334 1.334h10.666c.737 0 1.334-.597 1.334-1.334ZM12.785 1.816a1.636 1.636 0 0 0-2.321 0l-5.58 5.58a2.698 2.698 0 0 0-.882 1.796L4 11.335V12h2.756a2.7 2.7 0 0 0 1.882-.918l5.548-5.546a1.641 1.641 0 0 0 0-2.32l-1.4-1.401ZM6.71 10.67c.356-.025.688-.191.954-.496l4.041-4.04-1.836-1.837-4.07 4.07a1.38 1.38 0 0 0-.465.878v1.424H6.71Zm4.102-7.316 1.836 1.836.596-.596a.308.308 0 0 0 0-.435l-1.402-1.402a.304.304 0 0 0-.432 0l-.598.597Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPencilEdit;
