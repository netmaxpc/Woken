import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 25) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    setDisplayedText('');
    setIsFinished(false);
    
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
        setIsFinished(true);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return { displayedText, isFinished };
};
