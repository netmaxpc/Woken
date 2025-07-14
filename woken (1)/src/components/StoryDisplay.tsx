import React from 'react';

interface StoryDisplayProps {
  text: string;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ text }) => {
  return (
    <div className="flex-grow">
      <p className="text-lg leading-relaxed whitespace-pre-wrap">{text}</p>
    </div>
  );
};

export default StoryDisplay;
