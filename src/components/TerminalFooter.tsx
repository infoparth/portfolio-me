
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const TerminalFooter: React.FC = () => {
  return (
    <div className="mt-4 text-center text-xs text-green-600">
      <p>© 2025 Parth Verma · Built with React + TypeScript | Runtime: Terminal.js</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a href="https://github.com/infoparth" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 flex items-center gap-1">
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/parthverma-/" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 flex items-center gap-1">
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
        <a href="https://x.com/verma_parth79" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
          </svg>
          <span>X (Twitter)</span>
        </a>
      </div>
    </div>
  );
};

export default TerminalFooter;
 