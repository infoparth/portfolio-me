import React from "react";

interface TerminalInputProps {
  currentDirectory: string;
  currentInput: string;
  setCurrentInput: (input: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  shouldShowTabSuggestion: () => boolean;
  getCommandSuggestion: (input: string) => string;
  processCommand: () => void;
}

const TerminalInput: React.FC<TerminalInputProps> = ({
  currentDirectory,
  currentInput,
  setCurrentInput,
  inputRef,
  onKeyDown,
  shouldShowTabSuggestion,
  getCommandSuggestion,
  processCommand,
}) => {
  const handleCommandClick = (command: string) => {
    setCurrentInput(command);
    setTimeout(() => {
      processCommand();
    }, 100);
  };

  // Local function to check if tab suggestion should be shown
  const showTabSuggestion = (): boolean => {
    if (!currentInput) return false;
    const suggestion = getCommandSuggestion(currentInput);
    return suggestion !== "" && suggestion !== currentInput;
  };

  return (
    <>
      <div className="flex mt-4 items-center">
        <span className="text-green-400 mr-2">{currentDirectory}$</span>
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent border-none outline-none flex-1 text-green-400 caret-green-400"
          autoFocus
          placeholder={
            showTabSuggestion()
              ? `${getCommandSuggestion(currentInput)} (press Tab)`
              : "Press Tab for auto-completion"
          }
        />
      </div>

      <div className="mt-6">
        <div className="text-sm text-green-300 mb-3">
          ⚡ Quick Commands (Click to execute):
        </div>
        <div className="flex flex-wrap gap-2">
          {["help", "whoami", "ls", "resume", "hire me", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandClick(cmd)}
              className="text-sm bg-green-950 text-green-400 px-3 py-1 rounded border border-green-600 hover:bg-green-900 hover:text-green-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
          {currentDirectory === "/home" && (
            <button
              onClick={() => handleCommandClick("cat about.txt --full")}
              className="text-sm bg-blue-950 text-blue-400 px-3 py-1 rounded border border-blue-600 hover:bg-blue-900 hover:text-blue-300 transition-colors"
            >
              cat about.txt --full
            </button>
          )}
        </div>

        <div className="text-sm text-green-300 mb-2 mt-4">
          🗂️ Navigation Commands:
        </div>
        <div className="flex flex-wrap gap-2">
          {["cd skills", "cd projects", "cd experience"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommandClick(cmd)}
              className="text-sm bg-purple-950 text-purple-400 px-3 py-1 rounded border border-purple-600 hover:bg-purple-900 hover:text-purple-300 transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TerminalInput;
