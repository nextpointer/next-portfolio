"use client";

import { NextPage } from "next";
import { aschiLogo } from "../../../lib/aschii";
import { useState, useEffect, useRef, useMemo, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import commandData from "../../../lib/cliObject";

// Define the type for the keys in commandData
type CommandKey = keyof typeof commandData;

const Cli: NextPage = () => {
  const [line, setLine] = useState(0);
  const logoLines = aschiLogo.split("\n");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ command: string; result: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Memoized logo lines for better performance
  const displayedLogoLines = useMemo(() => logoLines.slice(0, line).join("\n"), [line, logoLines]);

  // Function for handling the input
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Function for handling the submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const command = input.trim();
    if (command) {
      if (command.toLowerCase() === "clear") {
        setOutput((prevOutput) => [...prevOutput, { command, result: "" }]);
        setTimeout(() => setOutput([]), 200); // Slight delay before clearing output to show the "clear" command
        setInput("");
        return;
      }
      const result = processCommand(command);
      setOutput((prevOutput) => [...prevOutput, { command, result}]);
      setInput("");
    }
  };

  // Function for processing commands
  const processCommand = (command: string) => {
    const [baseCommand, arg] = command.toLowerCase().split(" ") as [CommandKey, string ];
    
    if (baseCommand in commandData) {
      const commandInfo = commandData[baseCommand];
      return typeof commandInfo.result === "function"
        ? commandInfo.result(arg)
        : commandInfo.result;
    } else {
      return `Command not found: ${command}. Type 'help' to see available commands.`;
    }
  };

  // Effect to animate ASCII logo display
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (line < logoLines.length) {
        setLine((prevLine) => prevLine + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, [line, logoLines]);

  return (
    <div className="h-screen w-screen flex justify-between items-center text-white font-mono flex-col-reverse md:flex-row transition-all ease-in-out duration-300 bg-black ">
      <div className="md:w-1/2 w-screen h-screen p-4 flex-col flex overflow-y-scroll no-scrollbar text-[10px]">
        <span className="text-gray-200">Hello! I am Surajit, write {"'help'"} for more...</span>
        <div className="terminal-output mt-1">
          {output.map((item, index) => (
            <div key={index} className="flex flex-col mb-2 transition-opacity duration-200 ease-in-out">
              <span className="text-gray-200">
                <span className="text-green-400">@nextpointer:~$ </span>
                {item.command}
              </span>
              {item.result && <pre className="text-gray-200whitespace-pre-wrap">{item.result}</pre>}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <span className="text-green-400 pr-2">@nextpointer:~$ </span>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            ref={inputRef}
            className="w-full bg-transparent border-none focus:outline-none "
            autoFocus
          />
        </form>
      </div>
      <pre className="text-[0.5vw] w-full md:w-1/2 text-green-400 font-mono whitespace-pre-wrap flex justify-center items-center transition-opacity duration-200 ease-in-out">
        {displayedLogoLines}
      </pre>
    </div>
  );
};

export default Cli;
