"use client";

import { NextPage } from "next";
import { aschiLogo } from "../../../lib/aschii";
import { useState, useEffect, useRef } from "react";

const Cli: NextPage = () => {
  const [line, setLine] = useState(0);
  const logoLines = aschiLogo.split("\n");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<{ command: string; result: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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
        setTimeout(() => setOutput([]), 0); // Slight delay before clearing output to show the "clear" command
        setInput("");
        return;
      }
      const result = processCommand(command);
      setOutput((prevOutput) => [...prevOutput, { command, result }]);
      setInput("");
    }
  };

  // Function for processing commands
  const processCommand = (command: string) => {
    switch (command.toLowerCase()) {
      case "help":
        return "Available commands: 'about', 'skills', 'projects', 'contact', 'clear'";
      case "about":
        return "I am Surajit Maity, a web developer with expertise in Preact, TypeScript, and more.";
      case "skills":
        return "Skills: Preact, TypeScript, JavaScript, HTML, CSS, Node.js, React, and more.";
      case "projects":
        return "Project 1: MyPortfolio - A Preact-based portfolio website.\nProject 2: WaveApp - A web app with a 'wave feeling' effect.";
      case "contact":
        return "Email: surajit@example.com\nLinkedIn: linkedin.com/in/surajitmaity";
      case "clear":
        return "";
      default:
        return `Command not found: ${command}. Type 'help' to see available commands.`;
    }
  };

  // Effect to animate ASCII logo display
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (line < logoLines.length) {
        setLine(line + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 20);
    return () => clearInterval(intervalId);
  }, [line, logoLines]);

  return (
    <div className="h-screen w-screen flex justify-between items-center text-black font-mono flex-col-reverse md:flex-row">
      <div className="md:w-1/2 w-screen h-screen p-4 flex-col flex">
        <span className="text-gray-600">Hello! I am Surajit, write {"'help'"} for more...</span>
        <div className="terminal-output mt-1">
          {output.map((item, index) => (
            <div key={index} className="flex flex-col mb-2">
              <span className="text-gray-600"><span className="text-green-400">@nextpointer:~$ </span>{item.command}</span>
              {item.result && <span className="text-gray-800 ml-4">{item.result}</span>}
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
            className="w-full bg-transparent border-none focus:outline-none"
            autoFocus
          />
        </form>
      </div>
      <pre className="text-[0.5vw] w-full md:w-1/2 font-mono whitespace-pre-wrap flex justify-center items-center">
        {logoLines.slice(0, line).join("\n")}
      </pre>
    </div>
  );
};

export default Cli;
