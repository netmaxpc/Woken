import { useState, useEffect, useCallback } from 'react';
import type { StoryNodeKey } from '../types';

interface GameState {
  currentNodeKey: StoryNodeKey;
  journal: string[];
  inventory: string[];
}

const GAME_STATE_KEY = 'wokenGameState';

const getInitialState = (): GameState => {
  try {
    const savedState = localStorage.getItem(GAME_STATE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      // Basic validation to prevent app crash on malformed state
      if (parsed.currentNodeKey && Array.isArray(parsed.journal) && Array.isArray(parsed.inventory)) {
        return parsed;
      }
    }
  } catch (error) {
    console.error("Error loading game state from localStorage:", error);
    localStorage.removeItem(GAME_STATE_KEY); // Clear corrupted state
  }
  // Return default state if nothing is saved or if it's corrupted
  return {
    currentNodeKey: 'start',
    journal: [],
    inventory: [],
  };
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(getInitialState);

  useEffect(() => {
    try {
      localStorage.setItem(GAME_STATE_KEY, JSON.stringify(gameState));
    } catch (error) {
      console.error("Error saving game state to localStorage:", error);
    }
  }, [gameState]);

  const restartGame = useCallback(() => {
    localStorage.removeItem(GAME_STATE_KEY);
    setGameState({
      currentNodeKey: 'start',
      journal: [],
      inventory: [],
    });
  }, []);

  return { gameState, setGameState, restartGame };
}
