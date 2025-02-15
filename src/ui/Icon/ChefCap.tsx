import * as React from 'react';
interface SvgImgCustomProps {
  svgProperties?: React.SVGProps<SVGSVGElement>;
  circleFill: string;
  logoFill: string;
}
const SvgChefCap = (props: SvgImgCustomProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={56} height={57} fill="none" {...props}>
    <rect width={56} height={56} y={0.5} fill={props.circleFill} rx={28} />
    <path
      fill={props.logoFill}
      fillRule="evenodd"
      d="M18.728 22.827c1.323.858 2.802 1.817 5.134 1.658 0 0-2.64.772-5.376-.782.28 3.5-1.475 6.881-1.475 6.881s3.553.464 6.892 2.55c3.365 2.103 5.36 5.851 5.36 5.851s-2.11-2.175-5.947-4.45c-3.854-2.247-9.433-2.35-9.433-2.35s.922-1.05 1.933-2.943c.984-1.843 2.629-5.451 2.67-5.54-1.068-.605-2.15-1.565-3.095-3.06-3.398-5.353 5.278-9.354 10.586-5.781 5.181 3.526 6.835 3.74 10.329 4.191l.277.036c3.688.479 7.032 3.866 6.321 8.29-.71 4.424-4.229 5.834-6.999 4.813a65.519 65.519 0 0 1-1.743-.679c-1.847-.74-3.238-1.297-4.534-1.011 0 0 1.924-1.18 4.096-.3 2.172.882 6.152.226 7.065-2.68.938-2.89-.86-5.673-3.689-6.342-.924-.23-1.855-.352-2.788-.476-1.908-.252-3.828-.506-5.727-1.668a30.585 30.585 0 0 1-1.677-1.134c-2.286-1.618-4.67-3.306-7.687-1.836-3.76 1.832-2.206 5.666-.82 6.55l.327.212ZM28.968 43.5s.982-2.78 1.944-5.022c.978-2.271 3.832-6.7 3.832-6.7-3.23 2.279-6.24 9.039-6.24 9.039s-1.522-1.334-5.072-3.487c-4.166-2.52-9.361-2.324-10.267-2.29l-.094.004c.327-.01 2.237.02 7.283 2.427 5.538 2.67 8.613 6.029 8.613 6.029Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgChefCap;
