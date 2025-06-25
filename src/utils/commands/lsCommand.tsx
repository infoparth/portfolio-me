import React from "react";
import AnimatedText from "../../components/AnimatedText";
import { getDirectoriesForCurrentPath } from "../directoryUtils";

export const executeLsCommand = (currentDirectory: string): React.ReactNode => {
  if (currentDirectory === "/home") {
    return (
      <div className="mt-2">
        <AnimatedText
          text="╭─ DIRECTORY SCAN RESULTS ─╮
📁 skills
📁 projects  
📁 experience
📄 about.txt
╰─ SCAN COMPLETE ─╯"
          className="text-green-400 whitespace-pre-line"
          speed={60}
        />
      </div>
    );
  } else if (currentDirectory === "/projects") {
    return (
      <div className="mt-2">
        <div className="text-green-400 mb-4">
          <AnimatedText
            text="╭─ PROJECT REPOSITORY ─╮"
            className="text-green-400"
            speed={60}
          />
        </div>

        <div className="space-y-4">
          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-2">
              📁 D-Warranty
            </div>
            <div className="text-green-400 text-sm mb-2">
              Type: Personal Project
            </div>
            <div className="text-green-400 text-sm mb-3">
              <AnimatedText
                text="Created a web-based application to replace the physical
warranty and have a blockchain-based warranty using NFTs which will ensure authenticity and security."
                speed={40}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                React
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Ethereum
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Solidity
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                TypeScript
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href="https://d-warranty.vercel.app/"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [Live Demo]
              </a>
              <a
                href="https://github.com/infoparth/D-Warranty"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [GitHub]
              </a>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-2">
              📁 Health Chain
            </div>
            <div className="text-green-400 text-sm mb-2">
              Type: Personal Project
            </div>
            <div className="text-green-400 text-sm mb-3">
              <AnimatedText
                text="Developed Health Chain, an innovative blockchain solution allowing users to securely upload and share their
medical records, eliminating the need for lengthy paperwork and queues. Additionally, integrated NFT functionality enhances
data ownership for easy conversion and listing on marketplaces."
                speed={40}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                React
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Solidity
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                IPFS
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                TypeScript
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Thirdweb SDK
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              {/* <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [Live Demo]
              </a> */}
              <a
                href="https://github.com/infoparth/Health_Chain"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [GitHub]
              </a>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-2">
              📁 SolCycle
            </div>
            <div className="text-green-400 text-sm mb-2">
              Type: Personal Project
            </div>
            <div className="text-green-400 text-sm mb-3">
              <AnimatedText
                text="A Solana smart contract built with the Anchor framework that enables users to create and manage token sales. The contract allows sale creators to set an initial token price and define a custom vesting schedule, providing flexible distribution and pricing options for token launches"
                speed={40}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Rust
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Solana
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Anchor
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Oracles
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              {/* <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [Live Demo]
              </a> */}
              <a
                href="https://github.com/infoparth/solcycle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [GitHub]
              </a>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-2">
              📁 Go Blockchain
            </div>
            <div className="text-green-400 text-sm mb-2">
              Type: Personal Project
            </div>
            <div className="text-green-400 text-sm mb-3">
              <AnimatedText
                text="Lightweight blockchain inspired by bitcoin architecture written in Golang, exploring blockchain development for new developers."
                speed={40}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-yellow-800 text-yellow-400 px-2 py-1 rounded text-xs">
                HyperSDK
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Golang
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Blockchain
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              {/* <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [Live Demo]
              </a> */}
              <a
                href="https://github.com/infoparth/GO-Blockchain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [GitHub]
              </a>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-2">
              📁 Empower
            </div>
            <div className="text-green-400 text-sm mb-2">
              Type: Educational Project
            </div>
            <div className="text-green-400 text-sm mb-3">
              <AnimatedText
                text="A decentralized autonomous organization (DAO) gated by membership NFTs, allowing verified holders to create and vote on proposals. The system includes time-based voting windows, quorum requirements, and automated execution of on-chain actions upon successful vote outcomes, enabling community-driven governance and decision-making."
                speed={40}
              />
            </div>
            <div className="flex flex-wrap gap-1 mb-3">
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Solidity
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                Ethereum
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                DAO
              </span>
              <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                ERC 721 NFTs
                <span className="bg-green-950 text-green-400 px-2 py-1 rounded text-xs">
                  Typescript
                </span>
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              {/* <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [Live Demo]
              </a> */}
              <a
                href="https://github.com/infoparth/empower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 underline"
              >
                [GitHub]
              </a>
            </div>
          </div>
        </div>

        <div className="text-green-400 mt-4">
          <AnimatedText
            text="╰─ END PROJECT LIST ─╯"
            className="text-green-400"
            speed={60}
          />
        </div>
      </div>
    );
  } else if (currentDirectory === "/skills") {
    return (
      <div className="mt-2">
        <div className="text-green-400 mb-4">
          <AnimatedText
            text="╭─ SKILL MATRIX LOADED ─╮"
            className="text-green-400"
            speed={60}
          />
        </div>

        <div className="space-y-4">
          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-3">
              ⚡ Programming Languages
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-green-400">▶ TypeScript</div>
              <div className="text-green-400">▶ JavaScript</div>
              <div className="text-green-400">▶ Rust</div>
              <div className="text-green-400">▶ Solidity</div>
              <div className="text-green-400">▶ Motoko</div>
              <div className="text-green-400">▶ sCrypt</div>
              <div className="text-green-400">▶ Python</div>
              <div className="text-green-400">▶ Go</div>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-3">
              🌐 Frontend Technologies
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-green-400">▶ React</div>
              <div className="text-green-400">▶ Next.js</div>
              <div className="text-green-400">▶ Tailwind CSS</div>
              <div className="text-green-400">▶ HTML5/CSS3</div>
              <div className="text-green-400">▶ WebRTC</div>
              <div className="text-green-400">▶ WebSockets</div>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-3">
              ⚙️ Backend & Database
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-green-400">▶ Node.js</div>
              <div className="text-green-400">▶ Express.js</div>
              <div className="text-green-400">▶ PostgreSQL</div>
              <div className="text-green-400">▶ MongoDB</div>
              <div className="text-green-400">▶ Redis</div>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-3">
              🔗 Blockchain & Web3
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-green-400">▶ Ethereum</div>
              <div className="text-green-400">▶ Solana</div>
              <div className="text-green-400">▶ Hardhat</div>
              <div className="text-green-400">▶ Foundry</div>
              <div className="text-green-400">▶ Ethers.js</div>
              <div className="text-green-400">▶ Anchor</div>
            </div>
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-lg font-bold mb-3">
              🛠️ DevOps & Tools
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="text-green-400">▶ Git</div>
              <div className="text-green-400">▶ Docker</div>
              <div className="text-green-400">▶ NixOS</div>
              <div className="text-green-400">▶ Neovim</div>
            </div>
          </div>
        </div>

        <div className="text-green-400 mt-4">
          <AnimatedText
            text="╰─ SKILL SCAN COMPLETE ─╯"
            className="text-green-400"
            speed={60}
          />
        </div>
      </div>
    );
  } else if (currentDirectory === "/experience") {
    return (
      <div className="mt-2">
        <div className="text-green-400 mb-4">
          <AnimatedText
            text="╭─ PROFESSIONAL TIMELINE EXECUTION ─╮"
            className="text-green-400"
            speed={60}
          />
        </div>

        <div className="space-y-4">
          {/* <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              fullstack blockchain engineer @ rfan
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              01-04-2022 - 28-02-2025
            </div>
            <AnimatedText
              text="oversaw the entire development lifecycle of numerous features, from ideation to deployment, leading to substantial enhancements in platform functionality, engineered and implemented nft minting on blockchain networks via smart contracts, ensuring secure, transparent, and efficient asset transactions"
              className="text-green-400 text-sm"
              speed={40}
            />
          </div> */}

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Blockchain Consultant — Freelance (Remote)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Aug 2024 – Present
            </div>
            <AnimatedText
              text={`• Developed and deployed Solana Rust smart contracts for tokens, liquidity pools, DAOs, and staking, with seamless front-end integration.
• Created and launched EVM-compatible smart contracts, covering a range of token functionalities.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Full Stack Developer — BuildnBoost (Remote, Freelance)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Jun 2024 – Oct 2024
            </div>
            <AnimatedText
              text={`• Built an all-in-one content ecosystem app combining YouTube, Instagram, and podcast-style features.
• Front-End: Developed UI with React, Next.js, Tailwind CSS, and real-time features using WebRTC and WebSockets.
• Backend & Media: Handled playback with Vidstack, integrated APIs with Axios, and managed persistence using Redux-Persist.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Full Stack Blockchain Developer — Kanine Klans (Remote,
              Internship)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Jun 2024 – Aug 2024
            </div>
            <AnimatedText
              text={`• Led blockchain and tokenomics development for a gaming startup, tokenizing player identities and assets.
• Implemented ERC-6551 for token-gated accounts and upgradeable NFTs to retain achievements across games.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Full-stack Application Developer — Legitt (Remote, Internship)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Dec 2023 – May 2024
            </div>
            <AnimatedText
              text={`• Migrated a traditional lending system from Web2 to Web3 using DAOs, stablecoins, and NFTs.
• Built secure on-chain borrowing functionality using Solidity, React, Express, and Node.js.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Full Stack Blockchain Developer — DecentraClasses (Remote,
              Internship)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Sep 2023 – Dec 2023
            </div>
            <AnimatedText
              text={`• Integrated ERC-721 and ERC-1155 standards into smart contracts.
• Contributed to the main product website and collaborated on projects involving Shardeum and ICP blockchain ecosystems.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>

          <div className="border border-green-500 rounded p-4 bg-black/20">
            <div className="text-green-300 text-sm mb-1">
              Blockchain Developer Intern — WNE3 Technologies (Remote,
              Internship)
            </div>
            <div className="text-yellow-400 text-sm mb-2">
              Jul 2023 – Sep 2023
            </div>
            <AnimatedText
              text={`• Worked on blockchain solutions targeting Ethereum and Solana, building for real-world use cases in E-commerce.
• Developed and tested smart contracts for various decentralized applications.`}
              className="text-green-400 text-sm whitespace-pre-line"
              speed={40}
            />
          </div>
        </div>

        <div className="text-green-400 mt-4">
          <AnimatedText
            text="╰─ WORK HISTORY COMPLETE ─╯"
            className="text-green-400"
            speed={60}
          />
        </div>
      </div>
    );
  } else {
    const directories = getDirectoriesForCurrentPath(currentDirectory);
    return (
      <div className="mt-2">
        <AnimatedText
          text="╭─ DIRECTORY SCAN RESULTS ─╮"
          className="text-green-400"
          speed={60}
        />
        {directories.map((dir, index) => (
          <div key={index} className="text-green-400 ml-4">
            {dir.includes(".") ? "📄" : "📁"} {dir}
          </div>
        ))}
        <AnimatedText
          text="╰─ SCAN COMPLETE ─╯"
          className="text-green-400"
          speed={60}
        />
      </div>
    );
  }
};
