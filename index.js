const express = require("express");
const app = express();
const cors = require("cors");
const Data = require("./schema");
const mongodbConnection = require("./db");
const PORT = 5000;
app.use(express.json());
app.use(cors());

mongodbConnection()

app.post("/", async (req, res) => {
	let data = req.body;
    console.log(typeof req.body);
	try {
		if (typeof data === String) {
			await Data.insertMany([JSON.parse(req.body)]);
			res.send(req.body);
		} else {
            console.log('go');
			await Data.insertMany([req.body]);
			res.send(req.body);
		}
	} catch (err) {
		res.send(req.body);
	}
});

app.get("/", (req, res) => {
	res.send("Hello World !!!");
});

app.listen(PORT, () => console.log("server online"));
