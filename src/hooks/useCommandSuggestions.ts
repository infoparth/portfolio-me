export const useCommandSuggestions = (currentDirectory: string) => {
  const availableCommands = [
    "help",
    "whoami",
    "ls",
    "cd",
    "cat",
    "clear",
    "resume",
    "hire me",
  ];

  const getCommandSuggestion = (input: string): string => {
    if (!input) return "";

    const availableInContext = [...availableCommands];

    // Enhanced autocompletion for file commands - only allow --full version
    if (input.startsWith("cat ")) {
      const fileInput = input.substring(4);
      if (currentDirectory === "/home") {
        if ("about.txt --full".startsWith(fileInput)) {
          return "cat about.txt --full";
        }
      }
    }

    // Directory completion for cd command
    if (input.startsWith("cd ")) {
      const dirInput = input.substring(3);
      const availableDirs = ["skills", "projects", "experience"];
      const matchingDirs = availableDirs.filter((dir) =>
        dir.startsWith(dirInput)
      );
      if (matchingDirs.length > 0) {
        return `cd ${matchingDirs[0]}`;
      }
    }

    if (currentDirectory === "/home") {
      availableInContext.push("cat about.txt --full");
    }

    const matches = availableInContext.filter((cmd) =>
      cmd.startsWith(input.toLowerCase())
    );
    return matches.length > 0 ? matches[0] : "";
  };

  const shouldShowTabSuggestion = (): boolean => {
    return false; // This will be handled by the component itself
  };

  return {
    getCommandSuggestion,
    shouldShowTabSuggestion,
  };
};
