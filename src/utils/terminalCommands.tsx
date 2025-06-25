import React from "react";
import { executeHelpCommand } from "./commands/helpCommand";
import { executeHireCommand } from "./commands/hireCommand";
import { executeLsCommand } from "./commands/lsCommand";
import { executeCatCommand } from "./commands/catCommand";
import { executeWhoamiCommand } from "./commands/whoamiCommand";
import { executeResumeCommand } from "./commands/resumeCommand";

export const executeCommand = (
  input: string,
  currentDirectory: string
): React.ReactNode => {
  if (input === "help" || input === "h") {
    return executeHelpCommand();
  }

  if (input === "hire me" || input === "hire") {
    return executeHireCommand();
  }

  if (input === "ls") {
    return executeLsCommand(currentDirectory);
  }

  if (input.startsWith("cat about.txt")) {
    return executeCatCommand(input, currentDirectory);
  }

  if (input === "whoami") {
    return executeWhoamiCommand();
  }

  if (input === "resume" || input === "download resume") {
    return executeResumeCommand();
  }

  return (
    <div className="mt-2 text-red-400">
      ERROR: Command not found: {input}. Execute 'help' for available commands.
    </div>
  );
};
