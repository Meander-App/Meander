import mongoose from 'mongoose';

const MONGO_URI = `mongodb+srv://meander:${process.env.MONGODB_PWD}@cluster-zero.flxvn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
	.connect(MONGO_URI, {
		// // sets the name of the DB that our collections are part of
		dbName: 'pins',
	})
	.then(() => console.log("Would ya look at that? We're connected to MongoDB."))
	.catch((err: any) => console.log(err));

const Schema = mongoose.Schema;

const pinSchema = new Schema({
	createdAt: { type: Date, default: Date.now },
	name: { type: String, required: true },
	market: { type: String, required: true },
	type: { type: String, required: true },
	notes: String,
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true },
	// start votes off at 0 for every pin
	votes: { type: Number, default: 0 },
});

const Pin = mongoose.model('Pin', pinSchema);

export default Pin;
