const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	event: String,
	session: String,
	best_id: String,
	device: String,
	product: String,
	app: String,
	received: Number,
	req: String,
	when: Number,
	file: String,
	body: Object,
	best_location_type: String,
	best_location_when: Number,
	best_lat: Number,
	best_lon: Number,
	best_location: String,
	best_country: String,
	best_timezone: String,
	tower_when: Number,
	tower_lat: Number,
	tower_lon: Number,
	tower_country: String,
	tower_location: String,
	tower_timezone: String,
	tower_id: String,
	fleets: [String],
});

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

module.exports = Data;
