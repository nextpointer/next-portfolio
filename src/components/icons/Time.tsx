import React from "react";
import type { SVGProps } from "react";

export function Time(props: SVGProps<SVGSVGElement>) {
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
        d="M12 22c4.836 0 8.756-3.884 8.756-8.675c0-4.79-3.92-8.675-8.756-8.675s-8.757 3.884-8.757 8.675C3.243 18.115 7.163 22 12 22"
        opacity={0.5}
      ></path>
      <path
        fill="currentColor"
        d="M12 8.747c.402 0 .729.324.729.723v3.556l2.219 2.198a.72.72 0 0 1 0 1.022a.734.734 0 0 1-1.032 0l-2.433-2.41a.72.72 0 0 1-.213-.51V9.47c0-.4.326-.723.73-.723"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.24 2.34a.72.72 0 0 1-.232.996l-3.891 2.41a.734.734 0 0 1-1.006-.23a.72.72 0 0 1 .232-.996l3.892-2.41a.734.734 0 0 1 1.006.23m7.519 0a.734.734 0 0 1 1.005-.23l3.892 2.41a.72.72 0 0 1 .232.996a.734.734 0 0 1-1.006.23l-3.891-2.41a.72.72 0 0 1-.233-.996"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
