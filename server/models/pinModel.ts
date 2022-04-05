const mongoose = require('mongoose');

const MONGO_URI = ;

mongoose
	.connect(MONGO_URI, {
		// options for connect method to parse URI
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// // sets the name of the DB that our collections are part of
		dbName: 'pins',
	})
	.then(() => console.log('Would ya look at that? We\'re connected to MongoDB.'))
	.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const pinSchema = new Schema({
	createdAt: { type: Date, default: Date.now },
	name: {type: String, required: true},
	pinType: {type: String, required: true},
	pinNotes: String,
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true },
	// start votes off at 0 for every pin
	votes: { type: Number, default: 0 }
});

const Pin = mongoose.model('Pin', pinSchema);

module.exports = Pin;
