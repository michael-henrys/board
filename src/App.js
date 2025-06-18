import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import WhiteboardCanvas from './components/WhiteboardCanvas';

function App() {
  const [currentTool, setCurrentTool] = useState('select');

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Toolbar currentTool={currentTool} setCurrentTool={setCurrentTool} />
      <WhiteboardCanvas currentTool={currentTool} />
    </div>
  );
}

export default App; 