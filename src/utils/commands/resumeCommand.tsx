import React from "react";
import AnimatedText from "../../components/AnimatedText";

export const executeResumeCommand = (): React.ReactNode => {
  return (
    <div className="mt-2">
      <AnimatedText
        text="╭─ RESUME DEPLOYMENT OPTIONS ─╮
Available builds:
[1] fullstack_resume.pdf
[2] blockchain_resume.pdf
╰─ DOWNLOADS READY ─╯"
        className="text-green-400 whitespace-pre-line"
        speed={50}
      />
      <div className="ml-6 mt-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-green-400">[1]</span>
          <a
            href="https://drive.google.com/file/d/1ECAobcJyHXym_xD_wbRwXU2xcfoWaLbx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline"
          >
            fullstack_resume.pdf
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-green-400">[2]</span>
          <a
            href="https://drive.google.com/file/d/1__DSwxYifaTttrxBgEYx4k6N6bfG4QCG/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline"
          >
            blockchain_resume.pdf
          </a>
        </div>
      </div>
    </div>
  );
};
