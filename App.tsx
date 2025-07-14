import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { storyTree } from './constants';
import type { StoryNodeKey } from './types';
import Header from './components/Header';
import StoryDisplay from './components/StoryDisplay';
import ChoiceButtons from './components/ChoiceButtons';
import CustomActionForm from './components/CustomActionForm';
import SidePanel from './components/SidePanel';
import { useGameState } from './hooks/useGameState';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export default function App(): React.ReactNode {
  const { gameState, setGameState, restartGame } = useGameState();
  const { currentNodeKey, journal, inventory } = gameState;

  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChoice = (nextNodeKey: StoryNodeKey, item?: string) => {
    if (storyTree[nextNodeKey]) {
      setGameState(prev => ({
        ...prev,
        currentNodeKey: nextNodeKey,
        inventory: item && !prev.inventory.includes(item) ? [...prev.inventory, item] : prev.inventory,
      }));
      setFeedback('');
    } else {
      setFeedback("That path leads nowhere... for now.");
    }
  };

  const handleCustomAction = async (action: string) => {
    setIsLoading(true);
    setFeedback('');
    setGameState(prev => ({ ...prev, journal: [...prev.journal, action] }));

    const systemInstruction = `You are the game master for 'Woken', a dark, humorous, and realistic interactive story about memory loss.
- The tone is grim, mysterious, and slightly surreal, with a touch of dark humor.
- The player is confused and trying to piece things together. Their actions should have realistic, often mundane or unhelpful, consequences.
- Avoid fantasy elements. The story is grounded in psychological realism.
- Keep responses concise: 1-3 sentences describing the outcome of the action.
- Do NOT break character or give meta-commentary. Respond ONLY with the story's reaction.
- The player's identity is uncertain (are they Kevin? David M.?).
- Current situation: ${storyTree[currentNodeKey].text}
- Player's inventory: ${inventory.join(', ') || 'none'}
- A few of the player's recent actions (their journal): ${journal.slice(-3).join('; ')}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Given the situation, what happens when the player tries to: "${action}"`,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
        },
      });
      
      setFeedback(response.text);

    } catch (error) {
      console.error("Gemini API error:", error);
      setFeedback("A wave of static washes over your thoughts. The world doesn't seem to react. (Error communicating with the aether)");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestart = () => {
    restartGame();
    setFeedback('The world resets. The feeling of deja vu is unsettling.');
  };

  const currentNode = storyTree[currentNodeKey];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-gray-200 p-4 sm:p-6 lg:p-8 flex flex-col">
      <Header onRestart={handleRestart} />
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2 bg-black/50 border border-red-800/50 rounded-lg p-6 flex flex-col">
          <StoryDisplay text={currentNode.text} />
          <div className="mt-auto pt-6">
            {feedback && <p className="text-red-400 mb-4 italic text-sm whitespace-pre-wrap">{feedback}</p>}
            <ChoiceButtons choices={currentNode.choices} onChoice={handleChoice} />
            <CustomActionForm onCustomAction={handleCustomAction} isLoading={isLoading} />
          </div>
        </div>
        <div className="lg:col-span-1">
          <SidePanel inventory={inventory} journal={journal} />
        </div>
      </main>
    </div>
  );
}
