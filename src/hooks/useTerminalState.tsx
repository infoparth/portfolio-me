import { useState, useRef } from "react";
import { Command } from "../types/terminal";

export const useTerminalState = () => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentInput, setCurrentInput] = useState<string>("");
  const [currentDirectory, setCurrentDirectory] = useState<string>("/home");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return {
    commands,
    setCommands,
    currentInput,
    setCurrentInput,
    currentDirectory,
    setCurrentDirectory,
    terminalRef,
    inputRef,
  };
};
