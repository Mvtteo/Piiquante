const express = require('express');
const router = express.Router();

//ajout des modules d'authenfication et possibilité d'upload des images

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//import du controller 

const saucesCtrl = require('../controllers/sauces');

//déclaration de toutes les méthodes possibles

router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/', auth, saucesCtrl.getSauces);
router.post('/:id/like', auth, saucesCtrl.likeSauce);

module.exports = router;




