"use client"

import { NextPage } from "next";
import { aschiLogo } from "../../../lib/aschii";
import { useState, useEffect } from "react";

const Cli: NextPage = () => {
  const [line, setLine] = useState(0);
  const logoLines = aschiLogo.split("\n");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (line < logoLines.length) {
        setLine(line + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, [line, logoLines]);

  return (
    <div className="h-screen w-screen flex justify-between items-center">
      <div className="w-[50%] h-screen"></div>
      <pre className="text-[0.7vw] font-mono whitespace-pre-wrap text-black">
        {logoLines.slice(0, line).join("\n")}
      </pre>
    </div>
  );
};

export default Cli;
