//importation des modules

const express = require('express');
const mongoose = require('mongoose');

//déclaration path pour les images

const path = require('path');

//connexion à la base de données

require("dotenv").config();

mongoose.connect(process.env.mongodb,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//mise en place des headers pour acceder à l'api

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

//déclaration des routes pour l'api

const userRoutes = require('./routes/user');
const saucesRoutes = require('./routes/sauces');

//déclaration des chemins de l'api

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', saucesRoutes);

module.exports = app;