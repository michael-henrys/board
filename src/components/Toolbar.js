import React from 'react';

const Toolbar = ({ currentTool, setCurrentTool }) => {
  const tools = [
    { name: 'select', icon: '👆' },
    { name: 'pen', icon: '✏️' },
    { name: 'line', icon: '📏' },
    { name: 'rectangle', icon: '⬜' },
    { name: 'ellipse', icon: '⭕' },
    { name: 'text', icon: 'T' },
  ];

  return (
    <div style={{
      padding: '10px',
      display: 'flex',
      gap: '10px',
      background: '#f0f0f0',
      borderBottom: '1px solid #ddd'
    }}>
      {tools.map((tool) => (
        <button
          key={tool.name}
          onClick={() => setCurrentTool(tool.name)}
          style={{
            padding: '8px 12px',
            fontSize: '18px',
            background: currentTool === tool.name ? '#e0e0e0' : '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

export default Toolbar; 