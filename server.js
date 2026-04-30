const express = require('express');
const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Sample API
app.get('/api/data', (req, res) => {
  res.json({
    name: "Sadan",
    message: "Hello from API 👋"
  });
});

// POST API
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    received: data
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});