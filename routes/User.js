const express = require('express');
const router = express.Router();

//import du controller 

const userCtrl = require('../controllers/user');

//déclaration de toutes les méthodes possibles

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;