import React from "react";
import { Command } from "../types/terminal";
import image from "@/assets/prof-img.png";
import OptimizedProfileImage from "./OptimizedImage";

export const getInitialCommands = (): Command[] => {
  return [
    {
      input: "whoami",
      output: (
        <div className="mt-4">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 border border-green-400 rounded overflow-hidden">
              <div className="w-full h-full bg-black/50 flex items-center justify-center text-green-400">
                {/* <img
                  src={image}
                  alt="profile-image"
                  className="object-cover w-full h-full"
                /> */}
                <OptimizedProfileImage />
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
      ),
    },
    {
      input: "cat about.txt",
      output: (
        <div className="mt-4">
          <div className="text-green-400 mb-4">
            Hey, I’m Parth — a full-stack dev who’s been building cool stuff on
            both the Web2 and Web3 sides of the internet. React? Node? Smart
            contracts? You name it — I’ve probably shipped it. I care about
            clean code, real impact, and products that actually make sense. I’ve
            worked with multiple early-stage startups, right from their founding
            days — which means I’ve worn a bunch of hats, broken things (and
            fixed them), and learned more than any tutorial could teach. I don't
            wait for roadmaps—I help shape them.
          </div>

          <div className="text-green-400 mb-4">thanks for visiting!</div>

          <div className="mt-6 p-4 border border-yellow-500 rounded bg-yellow-950/20">
            <div className="text-yellow-400 text-center">
              {/* <div className="font-bold mb-2">
                📖 Want the complete technical deep-dive?
              </div> */}
              <div className="flex justify-center gap-4 text-sm">
                <span>
                  → Type: 'cat about.txt --full', or double click on the button
                  for complete details
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
};
