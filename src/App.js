import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '50px auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Welcome to Board App</h1>
      <p>This is a minimal Node.js app with React frontend</p>
      {message && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#f0f0f0', 
          borderRadius: '5px' 
        }}>
          <strong>Server Message:</strong> {message}
        </div>
      )}
    </div>
  );
}

export default App; 