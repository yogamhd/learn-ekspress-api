const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, connect, JWT_SECRET_KEY } = require("./config");
const jwt = require("express-jwt");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  jwt({ secret: JWT_SECRET_KEY }).unless({
    path: [
      {
        url: "/",
        methods: ["GET"]
      },
      {
        url: "/user",
        methods: ["POST"]
      },
      {
        url: "/user/login",
        methods: ["POST", "GET"]
      },
      {
        url: /^\/validate\/[\w]{1,}[\w\-]{1,}/i,
        methods: ["POST"]
      }
    ]
  })
);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      message: "You are not allow to enter this endpoints"
    });
  }
  return next();
});

app.use("/", require("./routes"));
app.use("/todo", require("./routes/todos"));
app.use("/user", require("./routes/users"));
app.use("/validate", require("./routes/validate")); //Tambahan utk ke react

connect(() => {
  app.listen(PORT, () => {
    console.log(`This app listening on PORT: ${PORT || 3000}`);
  });
});

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { PORT, DATABASE, DATABASE_PASSWORD } = require("./config");

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/", require("./routes"));
// app.use("/todo", require("./routes/todos"));
// app.use("/user", require("./routes/users"));

// app.listen(PORT, () => {
//     console.log(`This app listening on PORT: ${PORT || 3000}`);
// });

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const PORT = process.env.PORT || 3000;

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use("/", require("./routes"));
// app.use("/todo", require("./routes/todos"));
// app.use("/user", require("./routes/users"));

// app.listen(PORT, () => {
//     console.log(`This app listening on PORT: ${PORT}`);
// });

// // //use expreessya

// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const PORT  = 5000;

// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());

// console.log("teeeeesst");

// app.get("/", (req, res) => {
//     res.send({message: "Learn Express GET"});
// });

// app.get("/:id", (req, res) => {
//     res.send({message: "Learn Express GET ID"});
// });

// app.post("/", (req, res) => {
//     console.log(req.body);

//     res.status(201).json({
//         message: "New Item is Added",
//         data: {
//             email: req.body.email,
//             password: req.body.password
//         }
//     });
// });

// app.put("/", (req, res) => {
//     res.send({
//         message: "New Item is Edit",
//         data: {
//             name: req.body.name,
//             address: req.body.address,
//             age: Number(req.body.age)
//         }
//     });
// });

// // const expreess = require("express");
// // const app = expreess();
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const PORT = 5000;

// // app.use(bodyParser.urlencoded({extended:true}));
// // app.use(bodyParser.json());

// // // app.get("/", (req, res) => res.send({message: "Welcome! to Express"}));

// // app.get("/", (req, res) => {
// //     res.send({message: "Learn Express"});
// // });

// // app.post("/", (res, req) => {
// //     res.send({
// //         message: "New Item is Added",
// //         data: {
// //             name: req.body.name,
// //             address: req.body.address,
// //             age: Number(req.body.age)
// //         }
// //     });
// // });

// // app.put("/edit", (res, req) => {
// //     res.send({
// //         message: "New Item is Added",
// //         data: {
// //             name: req.body.name,
// //             address: req.body.address,
// //             age: Number(req.body.age)
// //         }
// //     });
// // });

// // // app.get("/hello", (req, res) => res.send({message: "Hi, i'm Express"}));

// // // app.listen(PORT, () => {
// // //     console.log(`This app listening on PORT: ${PORT}`);
// // // });
