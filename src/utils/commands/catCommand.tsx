import React from "react";
import AnimatedText from "../../components/AnimatedText";

export const executeCatCommand = (
  input: string,
  currentDirectory: string
): React.ReactNode => {
  if (input === "cat about.txt --full" && currentDirectory === "/home") {
    return (
      <div className="mt-2">
        <div className="border border-purple-500 rounded p-6 bg-purple-950/20">
          <div className="text-purple-300 text-xl font-bold mb-4 text-center">
            📄 FULL BIO EXECUTION
          </div>

          <div className="space-y-4">
            <div className="bg-purple-950/30 p-4 rounded border border-purple-600">
              <AnimatedText
                text={`👨‍💻 Initializing bio-protocol...
                  
                  Ah, curious, are we? 👀  
Alright, here’s the full story — since you asked.

I’m Parth Verma, a full-stack developer who builds across both Web2 and Web3 — from crisp React frontends to Solidity smart contracts and Go/Rust-powered systems. Whether it’s startups, side-projects, or hackathons, I love turning ideas into things that actually work (and scale).

It all kicked off in my first year when I cracked Flipkart Grid 4.0 Round 1 — that’s where I first got my hands dirty with blockchain and full-stack dev. Not long after, I found myself at the Solana Hacker House, surrounded by builders, shipping my first real projects. That moment turned interest into obsession.

Since then, I’ve worked with early-stage startups like BuildnBoost, Legitt, and Kanine Klans, where I’ve taken ownership of full product pipelines — writing frontends in React/Next.js, APIs in Node.js and Express, and contracts in Solidity, Rust, and more. My toolkit includes TypeScript, PostgreSQL, Hardhat, Foundry, Ethers.js, Viem, Tailwind, and whatever else the build needs.

I’ve also thrived in the hackathon circuit — I won a pool prize at ETHIndia, and placed first runner-up at a fully Web3 hackathon, building DeFi systems with real impact in intense 36-hour sprints. I live for that chaotic, collaborative energy where everyone&apos;s just trying to build something awesome.

What I’ve learned is that I’m someone who takes initiative, adapts quickly, and keeps shipping. I don’t wait for perfect conditions — I just get started. Whether it’s shaping product direction, writing code, or debugging at 3AM, I love being part of the messy middle that leads to something real.

So yeah — that’s me.  
Builder. Hacker. Early-stage startup guy. Just out here trying to build the future, one commit at a time.

                  `}
                className="text-purple-400 whitespace-pre-line"
                speed={50}
              />
            </div>

            {/* <div className="bg-purple-950/30 p-4 rounded border border-purple-600">
              <div className="text-purple-300 font-bold mb-2">
                🛠️ TECH_STACK.version_current
              </div>
              <AnimatedText
                text={`core_languages: [ 'Rust', 'Solidity', 'TypeScript', 'Motoko', 'sCrypt', 'Go']
frontend_frameworks: ['React', 'Next.js', 'Tailwind']
backend_protocols: ['Node.js', 'Express', 'PostgreSQL', 'WebRTC']
blockchain_tooling: ['Hardhat', 'Foundry', 'Anchor', 'Ethers.js']
environment: process.env.EDITOR === 'neovim' ? 'NixOS' : 'Linux'`}
                className="text-purple-400 whitespace-pre-line font-mono text-sm"
                speed={50}
              />
            </div>

            <div className="bg-purple-950/30 p-4 rounded border border-purple-600">
              <AnimatedText
                text={`🌐 Recent work includes deploying privacy-focused health record systems on Polygon, developing NFT-based warranties with ERC-6551, and building DeFi lending protocols integrated with DAO governance and liquidity pools.

🎤 When not pushing commits, I lead blockchain initiatives at developer communities, conduct technical talks, and experiment with next-generation consensus protocols. Philosophy: clean code, decentralized architectures, and terminal-based workflows.`}
                className="text-purple-400 whitespace-pre-line"
                speed={50}
              />
            </div> */}

            <div className="bg-purple-950/30 p-4 rounded border border-purple-600 text-center">
              <AnimatedText
                text="Ready to architect something revolutionary? Let's initialize a new project..."
                className="text-purple-400 font-bold"
                speed={50}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-2 text-red-400">
      ERROR: File not found or invalid parameters
    </div>
  );
};
