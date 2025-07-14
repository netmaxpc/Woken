import React from 'react';

interface SidePanelProps {
  inventory: string[];
  journal: string[];
}

const SidePanel: React.FC<SidePanelProps> = ({ inventory, journal }) => {
  return (
    <div className="bg-black/50 border border-red-800/50 rounded-lg p-4 flex flex-col h-full">
      <div>
        <h2 className="text-xl font-bold text-red-500 border-b border-red-800/50 pb-2 mb-3">Inventory</h2>
        {inventory.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-gray-400">
            {inventory.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Pockets are empty.</p>
        )}
      </div>
      <div className="mt-6 flex-grow flex flex-col min-h-0">
        <h2 className="text-xl font-bold text-red-500 border-b border-red-800/50 pb-2 mb-3">Journal</h2>
        <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
          {journal.length > 0 ? (
            <ul className="space-y-2 text-gray-500">
              {journal.map((entry, index) => (
                <li key={index} className="italic">"{entry}"</li>
              )).reverse()}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No custom actions taken yet. The mind is a blank slate.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
