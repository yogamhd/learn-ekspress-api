const express = require("express");
const router = express.Router();

const {
    getAll,
    getById,
    deleteOne,
    addOne,
    updateOne,
    login
} = require("./controller");

router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteOne);
router.post("/", addOne);
router.post("/login", login);
router.put("/:id", updateOne);

module.exports = router;


// // const express = require("express");
// // const router = express.Router();

// // const todoController = require("./controller");

// // router.get("/", todoController.getAll);
// // router.get("/:id", todoController.getById);
// // router.delete("/:id", todoController.deleteOne);
// // router.post("/", todoController.addOne);
// // router.put("/:id", todoController.updateOne);


// // module.exports = router;



// // // const express = require("express");
// // // const router = express.Router();

// // // const { getAll } = require("./controller");

// // // router.get("/", getAll);

// // // module.exports = router;



// const express = require("express");
// const router = express.Router();

// const {
//     getAll,
//     getById,
//     deleteOne,
//     addOne,
//     updateOne
// } = require("./controller");

// router.get("/", getAll);
// router.get("/:id", getById);
// router.delete("/:id", deleteOne);
// router.post("/", addOne);
// router.put("/:id", updateOne);

// module.exports = router;