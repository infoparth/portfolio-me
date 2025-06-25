import { useState } from "react";
import { Command } from "../types/terminal";
import { audioManager } from "../utils/audioUtils";
import { changeDirectory } from "../utils/directoryUtils";
import { executeCommand } from "../utils/terminalCommands";
import { getInitialCommands } from "../utils/initialCommands";

interface UseCommandProcessorProps {
  commands: Command[];
  setCommands: (commands: Command[]) => void;
  currentInput: string;
  setCurrentInput: (input: string) => void;
  currentDirectory: string;
  setCurrentDirectory: (dir: string) => void;
  terminalRef: React.RefObject<HTMLDivElement>;
  addToHistory: (command: string) => void;
}

export const useCommandProcessor = ({
  commands,
  setCommands,
  currentInput,
  setCurrentInput,
  currentDirectory,
  setCurrentDirectory,
  terminalRef,
  addToHistory,
}: UseCommandProcessorProps) => {
  const processCommand = () => {
    if (!currentInput.trim()) return;

    const input = currentInput.trim().toLowerCase();

    addToHistory(currentInput.trim());

    let newCommands = [
      ...commands,
      { input: currentInput.trim(), output: null },
    ];

    if (input === "clear") {
      newCommands = getInitialCommands();
      // Reset scroll position to top after clear
      setTimeout(() => {
        if (terminalRef.current) {
          terminalRef.current.scrollTop = 0;
        }
      }, 100);
    } else if (input.startsWith("cd ")) {
      const targetDir = input.split(" ")[1];
      const result = changeDirectory(
        targetDir,
        currentDirectory,
        setCurrentDirectory
      );

      // Auto-execute ls equivalent after cd for immediate content display
      if (!result.isError) {
        const directoryContent = executeCommand(
          "ls",
          result.newDirectory || currentDirectory
        );
        newCommands[newCommands.length - 1].output = (
          <div>
            <div
              className={`mt-2 ${
                result.isError ? "text-red-400" : "text-green-400"
              }`}
            >
              {result.message}
            </div>
            {directoryContent}
          </div>
        );
      } else {
        newCommands[newCommands.length - 1].output = (
          <div
            className={`mt-2 ${
              result.isError ? "text-red-400" : "text-green-400"
            }`}
          >
            {result.message}
          </div>
        );
      }
    } else {
      const output = executeCommand(input, currentDirectory);
      newCommands[newCommands.length - 1].output = output;
    }

    setCommands(newCommands);
    setCurrentInput("");
  };

  const handleNavClick = (dir: string) => {
    const dirName = dir.replace("/", "");
    const result = changeDirectory(
      dirName,
      currentDirectory,
      setCurrentDirectory
    );

    // Auto-execute ls equivalent after navigation
    if (!result.isError) {
      const directoryContent = executeCommand(
        "ls",
        result.newDirectory || currentDirectory
      );
      const newCommands = [
        ...commands,
        {
          input: `cd ${dirName}`,
          output: (
            <div>
              <div
                className={`mt-2 ${
                  result.isError ? "text-red-400" : "text-green-400"
                }`}
              >
                {result.message}
              </div>
              {directoryContent}
            </div>
          ),
        },
      ];

      setCommands(newCommands);

      // Scroll to the command prompt (start of new content) after navigation
      setTimeout(() => {
        if (terminalRef.current) {
          // Find the last command element (the one we just added)
          const commandElements = terminalRef.current.querySelectorAll(".mb-2");
          if (commandElements.length > 0) {
            const lastCommand = commandElements[commandElements.length - 1];
            // Scroll to show the command prompt at the top, not the content
            const commandPrompt = lastCommand.querySelector("div:first-child");
            if (commandPrompt) {
              commandPrompt.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            } else {
              lastCommand.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }
        }
      }, 100);
    } else {
      setCommands([
        ...commands,
        {
          input: `cd ${dirName}`,
          output: (
            <div
              className={`mt-2 ${
                result.isError ? "text-red-400" : "text-green-400"
              }`}
            >
              {result.message}
            </div>
          ),
        },
      ]);
    }
  };

  return {
    processCommand,
    handleNavClick,
  };
};
