const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const roomsRoutes = require('./routes/roomsRoutes');
const clientsRoutes = require('./routes/clientsRoutes');
const reservationsRoutes = require('./routes/reservationsRoutes');
const paymentsRoutes = require('./routes/paymentsRoutes');
const inclureRoutes = require('./routes/inclureRoutes');
const servicesRoutes = require('./routes/serviceRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Précise à mon API d'utiliser le format JSON
app.use(express.json());
app.use(cors());

// Précise à mon API d'utiliser les routes définies dans le fichier roomsRoutes.js
// ATTENTION : Toutes les routes définies dans roomsRoutes.js commenceront par /rooms
app.use ('/rooms', roomsRoutes);
app.use ('/clients', clientsRoutes);
app.use ('/reservations', reservationsRoutes);
app.use ('/payments', paymentsRoutes);
app.use ('/inclure', inclureRoutes);
app.use ('/services', servicesRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Lancement de mon serveur express
app.listen(port, () => {
  console.log(`Server is running on port http://127.0.0.1:${port}`);
});