import express from 'express';

import pinController from '../controllers/pinController';

const pinRouter = express.Router();

pinRouter.get('/:selectedMarket', pinController.getLocalPins, (req, res) => {
	res.status(200).send(res.locals.localPins);
});

pinRouter.post('/', pinController.addPin, (req, res) => {
	res.status(200).send(res.locals.newPin);
});

// pinRouter.patch('/:id', pinController.upVote, (req, res) => {
// 	res.status(200).send(res.locals.updatedPinVotes);
// });

// pinRouter.patch('/:id', pinController.downVote, (req, res) => {
// 	res.status(200).send(res.locals.updatedPinVotes);
// });

// save for later
pinRouter.delete('/:id', pinController.deletePin, (req, res) => {
	res
		.status(200)
		.send(`${res.locals.deletedPin.name} pin deleted successfully.`);
});

export default pinRouter;
