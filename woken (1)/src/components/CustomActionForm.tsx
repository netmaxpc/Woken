import React, { useState } from 'react';

interface CustomActionFormProps {
  onCustomAction: (action: string) => void;
  isLoading: boolean;
}

const CustomActionForm: React.FC<CustomActionFormProps> = ({ onCustomAction, isLoading }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onCustomAction(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Or type what you do next..."
        className="flex-grow bg-gray-900/70 border border-gray-700 rounded-md p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all disabled:opacity-50"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-red-800 text-white font-bold rounded-md hover:bg-red-700 transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed"
        disabled={!inputValue.trim() || isLoading}
      >
        {isLoading ? 'Thinking...' : 'Do'}
      </button>
    </form>
  );
};

export default CustomActionForm;
