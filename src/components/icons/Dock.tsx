import React from "react";
import type { SVGProps } from "react";

export function Dock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M15.07 19.25c3.05 0 4.58 0 5.64-.79a4 4 0 0 0 .83-.83c.78-1.06.78-2.58.78-5.63s0-4.57-.78-5.63a4 4 0 0 0-.83-.83c-1.06-.79-2.59-.79-5.64-.79H8.93c-3.05 0-4.58 0-5.64.79a4 4 0 0 0-.83.83c-.78 1.06-.78 2.58-.78 5.63s0 4.57.78 5.63a4 4 0 0 0 .83.83c1.06.79 2.59.79 5.64.79z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M5.96 15.51a.75.75 0 0 1 .75-.75h10.58a.75.75 0 0 1 0 1.5H6.71a.75.75 0 0 1-.75-.75"
      />
    </svg>
  );
}
