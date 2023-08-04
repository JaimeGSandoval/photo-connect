const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const profileController = require('../controllers/profile.js');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

router.get('/user', ensureAuth, profileController.getUserProfile);
router.get('/form', ensureAuth, profileController.getProfileForm);
router.post('/create', ensureAuth, upload.single('uploaded_file'), profileController.createProfile);

module.exports = router;
