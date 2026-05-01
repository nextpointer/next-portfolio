"use client";
import { SharedLayoutBackground } from "@/components/SharedBackground";
import React from "react";

type IconFC = React.FC<React.SVGProps<SVGSVGElement>>;

interface ExperienceType {
  company: string;
  role: string;
  year: string;
}

const EXPERIENCE: ExperienceType[] = [
  {
    company: "Unified Mentor",
    role: "Developer",
    year: "2025",
  },
  {
    company: "Math Coders",
    role: "Developer",
    year: "2024",
  },
];

export function Experience() {
  return (
    <div className="flex w-full flex-row ">
      <SharedLayoutBackground>
        {EXPERIENCE.map(({ company, role, year }, index) => {
          return (
            <div
              key={index}
              className="flex w-full flex-row items-center gap-3 py-2 text-left focus:outline-none group"
            >
              <span className="text-xs font-medium text-heading-text-color w-32 shrink-0">
                {company}
              </span>

              <span className="shrink-0 w-64 text-xs font-medium text-foreground mr-auto truncate ">
                <span className="bg-foreground/10 p-2 rounded-xs text-subheading-text-color">
                  {role}
                </span>
              </span>

              <span className="ml-auto truncate text-[10px] text-muted-foreground ">
                {year}
              </span>
            </div>
          );
        })}
      </SharedLayoutBackground>
    </div>
  );
}
