import path from 'path';
// TS prefers ES6 modules (node usually uses commonJS)
import express from 'express';
// type for error handler (err, req, res, next)
import { ErrorRequestHandler } from 'express';

// import routers
import pinRouter from './routes/pinRouter';

// run the server on 3000
const PORT = 3000;

const app = express();

// PUT/POST REQUESTS: recognize request body as either JSON or strings/arrays
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/pins', pinRouter);

// catch-all route handler
app.use((req, res) =>
	res.status(404).send(`Ruh-roh! We've got an error on our hands.`)
);

// global error handler
app.use(((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
}) as ErrorRequestHandler);

// start the server
app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}...`);
});

export { app };
