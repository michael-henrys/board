const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Basic API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 