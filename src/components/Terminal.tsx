import React from "react";
import { useTerminal } from "../hooks/useTerminal";
import TerminalHeader from "./TerminalHeader";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";
import TerminalFooter from "./TerminalFooter";

const Terminal = () => {
  const {
    commands,
    currentInput,
    setCurrentInput,
    currentDirectory,
    terminalRef,
    inputRef,
    handleKeyDown,
    processCommand,
    handleNavClick,
    getCommandSuggestion,
    shouldShowTabSuggestion,
  } = useTerminal();

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div
        ref={terminalRef}
        className="terminal-container max-w-6xl mx-auto h-[90vh] overflow-y-auto border border-green-500 rounded-md p-4"
        style={{
          boxShadow:
            "0 0 10px rgba(34, 197, 94, 0.3), inset 0 0 10px rgba(34, 197, 94, 0.1)",
        }}
      >
        <TerminalHeader
          currentDirectory={currentDirectory}
          onNavClick={handleNavClick}
        />

        <TerminalOutput commands={commands} />

        <TerminalInput
          currentDirectory={currentDirectory}
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          inputRef={inputRef}
          onKeyDown={handleKeyDown}
          shouldShowTabSuggestion={shouldShowTabSuggestion}
          getCommandSuggestion={getCommandSuggestion}
          processCommand={processCommand}
        />
      </div>

      <TerminalFooter />
    </div>
  );
};

export default Terminal;
