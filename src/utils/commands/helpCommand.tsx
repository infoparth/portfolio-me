import React from "react";
import AnimatedText from "../../components/AnimatedText";

export const executeHelpCommand = (): React.ReactNode => {
  return (
    <div className="mt-2">
      <AnimatedText
        text={`╭─ AVAILABLE SYSTEM COMMANDS ─╮
whoami............Display user profile & network endpoints
ls................List directory contents & available modules
cd [dir]..........Navigate to specified directory path
cat about.txt --full...Display complete bio details
resume............Access resume deployment options
hire me...........Launch mail client for direct contact
clear.............Flush terminal buffer
help..............Display this command reference
╰─ END COMMAND LIST ─╯`}
        className="text-green-400 whitespace-pre-line"
        speed={30}
      />
    </div>
  );
};
