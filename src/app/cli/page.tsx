"use client";

import { NextPage } from "next";
import { aschiLogo } from "../../../lib/aschii";
import { useState, useEffect, useRef, useMemo } from "react";
import commandData from "../../../lib/cliObject";

// Define the type for the keys in commandData
type CommandKey = keyof typeof commandData;

const Cli: NextPage = () => {
  const [line, setLine] = useState(0);
  const logoLines = aschiLogo.split("\n");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ command: string; result: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

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

    if (baseCommand === "go" && arg) {
      const result = typeof commandInfo.result === "function" ? commandInfo.result(arg) : commandInfo.result;
      if (result.startsWith("http")) {
        window.open(result, "_blank");
      }
      return result;
    }

    if (baseCommand === "/") {
      setTimeout(() => window.location.assign("/"), 0);
      return "Returning to the home section...";
    }

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

    // Effect to auto-focus the input field after each output update
    useEffect(() => {
      inputRef.current?.focus();
    }, [output]); 

    useEffect(() => {
      terminalRef.current?.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, [output]);

  return (
    <div className="h-screen w-screen flex justify-between items-center text-white font-mono flex-col-reverse md:flex-row transition-all ease-in-out duration-300 bg-black ">
      <div className="terminal md:w-1/2 w-screen h-screen p-4 flex-col flex overflow-y-scroll pb-36  text-[10px] md:text-[12px]" ref={terminalRef}>
        <span className="text-gray-200">Hello! <br></br> I am Surajit,a developer,learner and explorer. <br /> write {"'help'"} for more...</span>
        <div className="terminal-output mt-1">
          {output.map((item, index) => (
            <div key={index} className="flex flex-col mb-2 transition-opacity duration-200 ease-in-out">
              <span className="text-gray-200">
                <span className="text-green-400">@nextpointer:~$ </span>
                {item.command}
              </span>
              {item.result && <pre className="text-gray-200 whitespace-pre-wrap">{item.result}</pre>}
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
            className="w-full bg-transparent caret-green-400 border-none focus:outline-none  "
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
