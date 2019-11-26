//use expreessya

const expreess = require("express");
const app = expreess();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.get("/", (req, res) => res.send({message: "Welcome! to Express"}));

app.get("/", (req, res) => {
    res.send({message: "Learn Express"});
});

app.post("/", (res, req) => {
    res.send({
        message: "New Item is Added",
        data: {
            name: req.body.name,
            address: req.body.address,
            age: Number(req.body.age)
        }
    });
});

app.put("/edit", (res, req) => {
    res.send({
        message: "New Item is Added",
        data: {
            name: req.body.name,
            address: req.body.address,
            age: Number(req.body.age)
        }
    });
});

// app.get("/hello", (req, res) => res.send({message: "Hi, i'm Express"}));

// app.listen(PORT, () => {
//     console.log(`This app listening on PORT: ${PORT}`);
// });