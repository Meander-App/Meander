import Pin from '../models/pinModel';
import axios from 'axios';
// type for request handler (req, res, next)
import { RequestHandler } from 'express';

const pinController = {
	getLocalPins: async function (req, res, next) {
		// destructure/scrub the data
		const { selectedMarket } = req.body;
		try {
			const localPins = await Pin.find({ market: selectedMarket });
			res.locals.localPins = localPins;
			return next();
		} catch (err) {
			return next({
				log: `pinController.getLocalPins: ERROR: ${
					typeof err === 'object' ? JSON.stringify(err) : err
				}`,
				message: {
					err: 'Error occurred in pinController.getLocalPins. Check server logs for more details.',
				},
			});
		}
	} as RequestHandler,
	addPin: async function (req, res, next) {
		const { name, market, type, notes, latitude, longitude } = req.body;
		try {
			const newPin = await Pin.create({
				name,
				market,
				type,
				notes,
				latitude,
				longitude,
			});
			res.locals.newPin = newPin;
			return next();
		} catch (err) {
			return next({
				log: `pinController.addPin: ERROR: ${
					typeof err === 'object' ? JSON.stringify(err) : err
				}`,
				message: {
					err: 'Error occurred in pinController.addPin. Check server logs for more details.',
				},
			});
		}
	} as RequestHandler,
	// upVote: async function (req, res, next) {} as RequestHandler,
	// downVote: async function (req, res, next) {} as RequestHandler,
	deletePin: async function (req, res, next) {
		const { id } = req.params;
		try {
			const deletedPin = await Pin.findByIdAndDelete(id);
			res.locals.deletedPin = deletedPin;
			return next();
		} catch (err) {
			return next({
				log: `pinController.deletePin: ERROR: ${
					typeof err === 'object' ? JSON.stringify(err) : err
				}`,
				message: {
					err: 'Error occurred in pinController.deletePin. Check server logs for more details.',
				},
			});
		}
	} as RequestHandler,
};

export default pinController;
