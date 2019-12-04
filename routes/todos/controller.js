const { todo: todos } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("todos")
            .find({})
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },
    getByEmail: (req, res) => {
        get()
            .collection("todos")
            .find({ email: req.params.email })
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas by email", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },
    getById: (req, res) => {
        const { id } = req.params;

        get()
            .collection("todos")
            .findOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Get data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    deleteOne: (req, res) => {
        const { id } = req.params;

        get()
            .collection("todos")
            .deleteOne({ _id: objectId(id) })
            .then(result => {
                res.send({
                    message: `Delete data with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    addOne: (req, res) => {
        get()
            .collection("todos")
            .insertOne(req.body)
            .then(result => {
                res.status(201).json({
                    message: "Data successfully added",
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    },
    updateOne: (req, res) => {
        const { id } = req.params;
        get()
            .collection("todos")
            .updateOne({ _id: objectId(id) }, { $set: req.body })
            .then(result => {
                res.send({
                    message: `Data successfully update with id ${id}`,
                    data: result
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
};























// // // const { todo: todos } = require("../../models");

// // // module.exports = {
// // //     getAll: (req, res) => {
// // //         res.send(todos);
// // //     },
// // //     getById: (req, res) => {
// // //         const findOne = todos.todo.find(item => {
// // //             return item.id === Number(req.params.id);
// // //         });

// // //         res.send(findOne);
// // //     },
// // //     deleteOne: (req, res) => {
// // //         let newTodo = todos.todo.filter(
// // //             item => item.id !== parseInt(req.params.id)
// // //         );

// // //         res.send(newTodo);
// // //     }
// // // };

// // const { todo: todos } = require("../../models");
// // const { get } = require("../../config");

// // module.exports = {
// //     getAll: (req, res) => {
// //         get()
// //             .collection("todos")
// //             .find({})
// //             .toArray()
// //             .then(result => {
// //                 res.send({ message: "Get all data", data: result });
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     },
// //     getById: (req, res) => {
// //         const findOne = todos.todo.find(item => {
// //             return item.id === Number(req.params.id);
// //         });

// //         res.send(findOne);
// //     },
// //     deleteOne: (req, res) => {
// //         let newTodo = todos.todo.filter(
// //             item => item.id !== parseInt(req.params.id)
// //         );

// //         res.send(newTodo);
// //     },
// //     addOne: (req, res) => {
// //         get()
// //             .collection("todos")
// //             .insertOne(req.body)
// //             .then(result => {
// //                 res.send({ message: "Data successfully added", data: result });
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     },

// //     updateOne: (req, res) => {
// //         get ()
// //         .collection("todos")
// //         .update({_id: objectId(req.params.id)}, {$set: req.body})
// //         .then(result => {
// //             res.send({message: "Get all data", data: result });
// //         })
// //         .catch(error => {
// //             console.log(error);
// //         });
// //     }
// // };


// const { todo: todos } = require("../../models");
// const { get } = require("../../config");
// const objectId = require("mongodb").ObjectId;

// module.exports = {
//     getAll: (req, res) => {
//         get()
//             .collection("todos")
//             .find({})
//             .toArray()
//             .then(result => {
//                 res.send({ message: "Get all datas", data: result });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },
//     getById: (req, res) => {
//         const { id } = req.params;

//         get()
//             .collection("todos")
//             .findOne({ _id: objectId(id) })
//             .then(result => {
//                 res.send({
//                     message: `Get data with id ${id}`,
//                     data: result
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },
//     deleteOne: (req, res) => {
//         const { id } = req.params;

//         get()
//             .collection("todos")
//             .deleteOne({ _id: objectId(id) })
//             .then(result => {
//                 res.send({
//                     message: `Delete data with id ${id}`,
//                     data: result
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },
//     addOne: (req, res) => {
//         get()
//             .collection("todos")
//             .insertOne(req.body)
//             .then(result => {
//                 res.send({ message: "Data successfully added", data: result });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },
//     updateOne: (req, res) => {
//         const { id } = req.params;
//         get()
//             .collection("todos")
//             .updateOne({ _id: objectId(id) }, { $set: req.body })
//             .then(result => {
//                 res.send({
//                     message: `Data successfully update with id ${id}`,
//                     data: result
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }
// };