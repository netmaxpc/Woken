import React from 'react';

interface HeaderProps {
  onRestart: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRestart }) => {
  return (
    <header className="flex items-center justify-between pb-4 border-b border-red-800/50">
      <h1 className="text-3xl sm:text-4xl font-bold text-red-600 glitch-text">Woken</h1>
      <button
        onClick={onRestart}
        className="text-sm border border-red-700 text-red-400 px-4 py-2 rounded-md hover:bg-red-700 hover:text-white transition-colors duration-200"
      >
        Restart
      </button>
    </header>
  );
};

export default Header;
