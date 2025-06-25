import React from "react";
import { Command } from "../types/terminal";

interface TerminalOutputProps {
  commands: Command[];
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ commands }) => {
  return (
    <>
      {commands.map((command, index) => (
        <div key={index} className="mb-2">
          {command.input !== "system_init" && (
            <div className="flex">
              <span className="text-green-400 mr-2">$</span>
              <span className="text-green-400">{command.input}</span>
            </div>
          )}
          {command.output && <div>{command.output}</div>}
        </div>
      ))}
    </>
  );
};

export default TerminalOutput;
