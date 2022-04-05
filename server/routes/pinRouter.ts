import express from 'express';

import pinController from '../controllers/pinController';

const pinRouter = express.Router();

pinRouter.get('/:selectedMarket', pinController.getLocalPins, (req, res) => {
	res.status(200).send(res.locals.localPins);
});

pinRouter.post('/', pinController.addPin, (req, res) => {
	res.status(200).send(res.locals.newPin);
});

// need to add /upVote and /downVote because routes are the same otherwise
pinRouter.patch('/upVote/:id', pinController.upVote, (req, res) => {
	res
		.status(200)
		.send(
			`${res.locals.upVotedPin.name} pin now has ${res.locals.upVotedPin.votes} votes.`
		);
});

pinRouter.patch('/downVote/:id', pinController.downVote, (req, res) => {
	res
		.status(200)
		.send(
			`${res.locals.downVotedPin.name} pin now has ${res.locals.downVotedPin.votes} votes.`
		);
});

// save for later
pinRouter.delete('/:id', pinController.deletePin, (req, res) => {
	res
		.status(200)
		.send(`${res.locals.deletedPin.name} pin deleted successfully.`);
});

export default pinRouter;
