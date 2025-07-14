import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
import { storyTree } from './constants';
import type { StoryNodeKey, GeminiResponse } from './types';
import Header from './components/Header';
import StoryDisplay from './components/StoryDisplay';
import ChoiceButtons from './components/ChoiceButtons';
import CustomActionForm from './components/CustomActionForm';
import SidePanel from './components/SidePanel';
import VideoPlayer from './components/VideoPlayer';

// IMPORTANT: Vite exposes environment variables on the `import.meta.env` object.
const API_KEY = import.meta.env.VITE_API_KEY;

export default function App(): React.ReactNode {
  const [currentNodeKey, setCurrentNodeKey] = useState<StoryNodeKey>('start');
  const [journal, setJournal] = useState<string[]>([]);
  const [inventory, setInventory] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [ai, setAi] = useState<GoogleGenAI | null>(null);
  const [showVideo, setShowVideo] = useState<boolean>(false);

  useEffect(() => {
    if (API_KEY) {
      setAi(new GoogleGenAI({ apiKey: API_KEY }));
    } else {
      console.error("VITE_API_KEY is missing. Please set it in your environment variables (.env.local file).");
    }

    const savedState = localStorage.getItem('wokenGameState');
    if (savedState) {
      const { currentNodeKey, journal, inventory } = JSON.parse(savedState);
      setCurrentNodeKey(currentNodeKey);
      setJournal(journal);
      setInventory(inventory);
    }
  }, []);

  useEffect(() => {
    const gameState = JSON.stringify({ currentNodeKey, journal, inventory });
    localStorage.setItem('wokenGameState', gameState);
  }, [currentNodeKey, journal, inventory]);

  const handleChoice = (nextNodeKey: StoryNodeKey, item?: string) => {
    const nextNode = storyTree[nextNodeKey];
    if (nextNode) {
      setCurrentNodeKey(nextNodeKey);
      if (item && !inventory.includes(item)) {
        setInventory(prev => [...prev, item]);
      }
      setFeedback('');

      if (nextNode.videoUrl) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    } else {
      setFeedback("That path leads nowhere... for now.");
    }
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  const handleCustomAction = async (action: string) => {
    if (!ai) {
      setFeedback("The connection to the storyteller is severed. API key is missing.");
      return;
    }

    setIsLoading(true);
    setJournal(prev => [...prev, action]);
    
    const context = storyTree[currentNodeKey].text;
    const systemInstruction = `You are a terse, noir-style game master for an interactive fiction game. The player is suffering from amnesia. Respond to their action with a short, narrative description of the outcome (1-2 sentences). Maintain a mysterious and gritty tone. Do not break character. If the action logically results in a tangible, simple object that can be held, specify the item. If not, the item must be null.`;
    const prompt = `Context: "${context}"\n\nAction: "${action}"`;
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              narrative: {
                type: Type.STRING,
                description: "The narrative outcome of the action.",
              },
              item: {
                type: Type.STRING,
                description: "The item acquired (e.g., 'Rusty Key', 'Crumpled Note'), or null if no item was found.",
              },
            },
            required: ["narrative", "item"],
          },
        },
      });

      const responseText = response.text.trim();
      const result: GeminiResponse = JSON.parse(responseText);

      setFeedback(result.narrative);
      if (result.item && !inventory.includes(result.item)) {
        setInventory(prev => [...prev, result.item]);
      }
    } catch (error) {
      console.error("Error generating content:", error);
      setFeedback("A wave of static washes over your thoughts... The connection is lost.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    setCurrentNodeKey('start');
    setJournal([]);
    setInventory([]);
    setFeedback('The world resets. The feeling of deja vu is unsettling.');
    setShowVideo(false);
    localStorage.removeItem('wokenGameState');
  };

  const currentNode = storyTree[currentNodeKey];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 p-4 sm:p-6 lg:p-8 flex flex-col">
      <Header onRestart={handleRestart} />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 bg-black/50 border border-red-800/50 rounded-lg p-6 flex flex-col justify-center items-center">
          {showVideo && currentNode.videoUrl ? (
            <VideoPlayer src={currentNode.videoUrl} onEnded={handleVideoEnd} />
          ) : (
            <div className="w-full h-full flex flex-col">
              <StoryDisplay text={currentNode.text} />
              <div className="mt-auto pt-6">
                {feedback && <p className="text-red-400 mb-4 italic text-sm">{feedback}</p>}
                <ChoiceButtons choices={currentNode.choices} onChoice={handleChoice} />
                <CustomActionForm onCustomAction={handleCustomAction} isLoading={isLoading} />
              </div>
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <SidePanel inventory={inventory} journal={journal} />
        </div>
      </main>
    </div>
  );
}
