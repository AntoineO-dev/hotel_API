const express = require('express');
const app = express();
const port = 3000;
const roomsRoutes = require('./routes/roomsRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Précise à mon API d'utiliser le format JSON
app.use(express.json());

// Précise à mon API d'utiliser les routes définies dans le fichier roomsRoutes.js
// ATTENTION : Toutes les routes définies dans roomsRoutes.js commenceront par /rooms
app.use ('/rooms', roomsRoutes);
app.use ('/clients', clientsRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Lancement de mon serveur express
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});