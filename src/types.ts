import type { storyTree } from './constants';

export type StoryNodeKey = keyof typeof storyTree;

export interface Choice {
  text: string;
  next: StoryNodeKey;
  item?: string;
}

export interface StoryNode {
  text: string;
  choices: Choice[];
  videoUrl?: string;
}

export type StoryTree = {
  [key: string]: StoryNode;
};

export interface GeminiResponse {
  narrative: string;
  item: string | null;
}
