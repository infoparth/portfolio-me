import { useEffect } from "react";
import { audioManager } from "../utils/audioUtils";
import { useCommandHistory } from "./useCommandHistory";
import { useTerminalState } from "./useTerminalState";
import { useCommandProcessor } from "./useCommandProcess";
import { useCommandSuggestions } from "./useCommandSuggestions";
import { useKeyboardHandler } from "./useKeyboardHandler";
import { getInitialCommands } from "../utils/initialCommands";

export const useTerminal = () => {
  const {
    commands,
    setCommands,
    currentInput,
    setCurrentInput,
    currentDirectory,
    setCurrentDirectory,
    terminalRef,
    inputRef,
  } = useTerminalState();

  const { commandHistory, historyIndex, addToHistory, navigateHistory } =
    useCommandHistory();

  const { processCommand, handleNavClick } = useCommandProcessor({
    commands,
    setCommands,
    currentInput,
    setCurrentInput,
    currentDirectory,
    setCurrentDirectory,
    terminalRef,
    addToHistory,
  });

  const { getCommandSuggestion, shouldShowTabSuggestion } =
    useCommandSuggestions(currentDirectory);

  const { handleKeyDown } = useKeyboardHandler({
    currentInput,
    setCurrentInput,
    processCommand,
    getCommandSuggestion,
    navigateHistory,
  });

  useEffect(() => {
    audioManager.initialize();

    inputRef.current?.focus();

    // Set initial terminal position to top and disable auto-scroll
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0;
    }

    setCommands(getInitialCommands());
  }, []);

  // Remove auto-scroll effect completely - let users scroll manually
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName !== "A") {
        inputRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return {
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
  };
};
