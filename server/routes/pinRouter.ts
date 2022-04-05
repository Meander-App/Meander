import express from 'express';

const pinController = require('../controllers/pinController');

const router = express.Router();

router.get('/', pinController.getLocalPins, (req, res) => {
	res.status(200).send(res.locals.localPins);
});

router.post('/', pinController.addPin, (req, res) => {
	res.status(200).send(res.locals.newPin);
});

router.patch('/:id', pinController.upvote, (req, res) => {
	res.status(200).send(res.locals.updatedPinVotes);
});

router.patch('/:id', pinController.downvote, (req, res) => {
	res.status(200).send(res.locals.updatedPinVotes);
});

// save for later
router.delete('/:id', pinController.deletePin, (req, res) => {
	res.status(200).send('Pin deleted successfully.');
});

module.exports = pinRouter;
