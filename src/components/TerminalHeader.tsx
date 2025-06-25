import React from "react";

interface TerminalHeaderProps {
  currentDirectory: string;
  onNavClick: (dir: string) => void;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  currentDirectory,
  onNavClick,
}) => {
  return (
    <div className="mb-4">
      <div className="text-xs mb-2 text-green-400">
        Terminal v3.1.4 | kernel: parth_portfolio_os
      </div>
      <div className="flex items-center justify-center space-x-4 mb-4 py-2 border-y border-green-500/30">
        {["/home", "/skills", "/projects", "/experience"].map((dir) => (
          <button
            key={dir}
            onClick={() => onNavClick(dir)}
            className={`text-green-400 hover:text-green-300 focus:outline-none ${
              currentDirectory === dir ? "underline" : ""
            }`}
          >
            cd {dir}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TerminalHeader;
 