const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  {
    username: 'testuser',
    passwordHash: '$2b$10$7QpVbZQ42.ikBLSU4zA9f.NiYbRCPjJqlBDr5C6G.D0O/jXjgzJ6y', // "password123" hashé
  },
];

app.use(express.json());




app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Vérifie si l'utilisateur existe
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }

  // Vérifie si le mot de passe est correct
  const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: 'Mot de passe incorrect' });
  }

  // Succès
  res.json({ message: 'Connexion réussie', username: user.username });
});

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'Site_internet')));

// Exemple de route API
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Site_internet', 'site_internet.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})