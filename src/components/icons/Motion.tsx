import type { SVGProps } from "react";

const Motion = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 384" preserveAspectRatio="xMidYMid">
    <path
      fill="currentColor"
      d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z"
    />
  </svg>
);

export { Motion };
