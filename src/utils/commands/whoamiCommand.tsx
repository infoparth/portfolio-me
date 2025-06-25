import React from "react";

export const executeWhoamiCommand = (): React.ReactNode => {
  return (
    <div className="mt-4">
      <div className="flex items-start gap-6">
        <div className="w-32 h-32 border border-green-400 rounded overflow-hidden">
          <div className="w-full h-full bg-black/50 flex items-center justify-center text-green-400">
            [PROFILE_IMG]
          </div>
        </div>

        <div className="flex-1">
          <div className="text-2xl font-bold text-green-400 mb-4">
            Hello, I'm Parth
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-green-400">[x:</span>
              <a
                href="https://x.com/verma_parth79"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                x.com/verma_parth79
              </a>
              <span className="text-green-400">]</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">[github:</span>
              <a
                href="https://github.com/infoparth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 underline"
              >
                github.com/infoparth
              </a>
              <span className="text-green-400">]</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-green-400">[email:</span>
              <a
                href="mailto:parthatharv2606@gmail.com"
                className="text-green-400 hover:text-green-300 underline"
              >
                parthatharv2606@gmail.com
              </a>
              <span className="text-green-400">]</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
