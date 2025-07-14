import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface StoryDisplayProps {
  text: string;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ text }) => {
  const { displayedText, isFinished } = useTypewriter(text, 25);

  return (
    <div className="flex-grow min-h-[12em]"> {/* Min-height prevents layout shifts */}
      <p className="text-lg leading-relaxed whitespace-pre-wrap">
        {displayedText}
        {!isFinished && <span className="inline-block w-2 h-5 bg-gray-200 ml-1 animate-blink align-bottom"></span>}
      </p>
    </div>
  );
};

export default StoryDisplay;
