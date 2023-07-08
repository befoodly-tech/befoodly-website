import * as React from 'react';
interface SvgImgCustomProps {
  svgProperties?: React.SVGProps<SVGSVGElement>;
  circleFill: string;
  logoFill: string;
}

const SvgDeliveryScooter = (props: SvgImgCustomProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={56} fill="none" {...props}>
    <rect width={56} height={56} fill={props.circleFill} rx={28} />
    <path
      fill={props.logoFill}
      d="M37.917 20.917a2.842 2.842 0 0 0-2.834-2.834h-4.25v2.834h4.25v3.754l-4.93 6.162h-4.986V23.75H19.5a5.665 5.665 0 0 0-5.666 5.667v4.25h2.833a4.244 4.244 0 0 0 4.25 4.25 4.244 4.244 0 0 0 4.25-4.25h6.346l6.404-8.005v-4.745Zm-21.25 9.916v-1.416a2.842 2.842 0 0 1 2.833-2.834h2.834v4.25h-5.667Zm4.25 4.25a1.42 1.42 0 0 1-1.417-1.416h2.834a1.42 1.42 0 0 1-1.417 1.416Z"
    />
    <path
      fill={props.logoFill}
      d="M25.167 19.5h-7.084v2.833h7.084V19.5ZM37.917 29.417a4.244 4.244 0 0 0-4.25 4.25 4.244 4.244 0 0 0 4.25 4.25 4.244 4.244 0 0 0 4.25-4.25 4.244 4.244 0 0 0-4.25-4.25Zm0 5.666a1.42 1.42 0 0 1-1.417-1.416c0-.78.638-1.417 1.417-1.417s1.416.638 1.416 1.417a1.42 1.42 0 0 1-1.416 1.416Z"
    />
  </svg>
);
export default SvgDeliveryScooter;
