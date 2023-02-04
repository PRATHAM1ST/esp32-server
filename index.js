const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(express.json());
app.use(cors());

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.get("/", (req, res) => {
	res.send("Hello World !!!");
});

app.listen(PORT, () => console.log("server online"));
