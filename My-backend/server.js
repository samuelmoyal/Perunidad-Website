const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'Site_internet')));

// Exemple de route API
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Site_internet', 'site_internet.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});