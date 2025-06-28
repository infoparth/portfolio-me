import React from "react";
import AnimatedText from "../../components/AnimatedText";

export const executeResumeCommand = (): React.ReactNode => {
  return (
    <div className="mt-2">
      <AnimatedText
        text={`╭─ RESUME DEPLOYMENT OPTIONS ─╮
Available builds:
[1] Resume.pdf
╰─ DOWNLOADS READY ─╯`}
        className="text-green-400 whitespace-pre-line"
        speed={50}
      />
      <div className="ml-6 mt-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-green-400">[1]</span>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline mr-2"
          >
            fullstack_resume.pdf
          </a>

          <a
            href="/Resume.pdf"
            download="Parth_Verma_Fullstack_Resume.pdf"
            className="text-xs text-gray-400 hover:text-gray-300"
          >
            [download]
          </a>
        </div>
      </div>
    </div>
  );
};
