const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Dummy parser: Replace with real parsing logic for your device!
function parseGpsLine(line) {
  // Example: imei:864895036504460,tracker,,,L,,,2778,,2ea7,,,;
  // Replace with real parsing logic!
  // For demo, return Kabul coordinates:
  return {
    imei: '864895036504460',
    lat: 34.5553,
    lng: 69.2075
  };
}

app.get('/api/location', (req, res) => {
  fs.readFile('p_data.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Could not read data file' });
    const lines = data.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    const parsed = parseGpsLine(lastLine);
    res.json(parsed);
  });
});

app.use(express.static('.')); // Serves your HTML and assets

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});