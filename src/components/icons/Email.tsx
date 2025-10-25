import React from "react";
import type { SVGProps } from "react";

export function Email(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect width={18.5} height={17} x={2.682} y={3.5} rx={4}></rect>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13"
        ></path>
      </g>
    </svg>
  );
}
