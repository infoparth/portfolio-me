interface DirectoryChangeResult {
  message: string;
  isError: boolean;
  newDirectory?: string;
}

export const changeDirectory = (
  targetDir: string,
  currentDirectory: string,
  setCurrentDirectory: (dir: string) => void
): DirectoryChangeResult => {
  const validDirectories = ["/home", "/skills", "/projects", "/experience"];

  if (targetDir === "..") {
    if (currentDirectory !== "/home") {
      setCurrentDirectory("/home");
      return {
        message: "Navigated to parent directory",
        isError: false,
        newDirectory: "/home",
      };
    } else {
      // return {
      //   message: "Already at root directory",
      //   isError: true,
      // };
      setCurrentDirectory("/home");
      return {
        message: "",
        isError: false,
        newDirectory: "/home",
      };
    }
  }

  if (targetDir === "~" || targetDir === "home") {
    setCurrentDirectory("/home");
    return {
      message: "Navigated to home directory",
      isError: false,
      newDirectory: "/home",
    };
  }

  const targetPath = `/${targetDir}`;

  if (validDirectories.includes(targetPath)) {
    setCurrentDirectory(targetPath);
    return {
      message: `Navigated to ${targetPath}`,
      isError: false,
      newDirectory: targetPath,
    };
  } else {
    return {
      message: `Directory not found: ${targetDir}`,
      isError: true,
    };
  }
};

export const getDirectoriesForCurrentPath = (currentPath: string): string[] => {
  switch (currentPath) {
    case "/home":
      return ["skills/", "projects/", "experience/", "about.txt"];
    case "/skills":
      return ["../"];
    case "/projects":
      return ["../"];
    case "/experience":
      return ["../"];
    default:
      return [];
  }
};
