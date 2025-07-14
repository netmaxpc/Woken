import React from 'react';
import type { Choice, StoryNodeKey } from '../types';

interface ChoiceButtonsProps {
  choices: Choice[];
  onChoice: (nextNodeKey: StoryNodeKey, item?: string) => void;
}

const ChoiceButtons: React.FC<ChoiceButtonsProps> = ({ choices, onChoice }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {choices.map((choice, index) => (
        <button
          key={index}
          onClick={() => onChoice(choice.next, choice.item)}
          className="w-full text-left p-4 bg-gray-900/50 border border-gray-700 rounded-md hover:bg-red-800/50 hover:border-red-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
