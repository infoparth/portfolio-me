import { audioManager } from "../utils/audioUtils";
import { useCommandHistory } from "./useCommandHistory";

interface UseKeyboardHandlerProps {
  currentInput: string;
  setCurrentInput: (input: string) => void;
  processCommand: () => void;
  getCommandSuggestion: (input: string) => string;
  navigateHistory: (
    direction: "up" | "down",
    currentInput: string,
    setCurrentInput: (input: string) => void
  ) => void;
}

export const useKeyboardHandler = ({
  currentInput,
  setCurrentInput,
  processCommand,
  getCommandSuggestion,
  navigateHistory,
}: UseKeyboardHandlerProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      processCommand();
    } else if (e.key === "Tab") {
      e.preventDefault();
      const suggestion = getCommandSuggestion(currentInput);
      if (suggestion) {
        setCurrentInput(suggestion);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      navigateHistory("up", currentInput, setCurrentInput);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      navigateHistory("down", currentInput, setCurrentInput);
    } else if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      // Play typewriter sound for character keys only
      audioManager.createMechanicalKeySound();
    }
  };

  return {
    handleKeyDown,
  };
};
