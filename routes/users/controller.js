const { user: users } = require("../../models");
const { get } = require("../../config");
const objectId = require("mongodb").ObjectId;
const {hashPassword, comparedPassword} = require("../../helpers");

module.exports = {
    getAll: (req, res) => {
        get()
            .collection("users")
            .find({})
            .toArray()
            .then(result => {
                res.send({ message: "Get all datas", data: result });
            })
            .catch(error => {
                console.log(error);
            });
    },
    getById: (req, res) => {
        const { id } = req.params;

        get()
            .collection("users")
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
            .collection("users")
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
    addOne: async (req, res) => {
        const hash = await hashPassword(req.body.password);

        get()
            .collection("users")
            .insertOne({...req.body, password: hash})
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
    // addOne: (req, res) => {
    //     get()
    //         .collection("users")
    //         .insertOne(req.body)
    //         .then(result => {
    //             res.status(201).json({
    //                 message: "Data successfully added",
    //                 data: result
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },
    updateOne: (req, res) => {
        const { id } = req.params;
        get()
            .collection("users")
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
    },
    login: (req, res) => {
        const { body } = req;

        get()
            .collection("users")
            .findOne({ email: body.email })
            .then(async response => {
                const compared = await comparedPassword(
                    req.body.password,
                    response.password
                );

                if (compared === true) {
                    const {email, firstName} = response;
                    res.status(200).json({
                        message: "Login successfull",
                        data: { email, firstName }
                });
                }
            });
    }
    // login: (req, res) => {
    //     const { body } = req;

    //     get()
    //         .collection("users")
    //         .findOne({ email: body.email, password: body.password })
    //         .then(response => {
    //             const { email, firstName } = response;
    //             res.status(200).json({
    //                 message: "Login successfull",
    //                 data: { email, firstName }
    //             });
    //         });
    // }
};






























// const { user: users } = require("../../models");
// const { get } = require("../../config");
// const objectId = require("mongodb").ObjectId;

// module.exports = {
//     getAll: (req, res) => {
//         get()
//             .collection("user")
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
//             .collection("user")
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
//             .collection("user")
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
//             .collection("user")
//             .insertOne(req.body)
//             .then(result => {
//                 res.status(201).send({                                                                      //Sebelumnya send adalah json
//                     message: "Data successfully added",
//                     data: result
//                 });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     },
//     updateOne: (req, res) => {
//         const { id } = req.params;
//         get()
//             .collection("user")
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



















// // const { todo: todos } = require("../../models");
// // const { get } = require("../../config");
// // const objectId = require('mongodb').ObjectId

// // module.exports = {
// //     getAll: (req, res) => {
// //         console.log(req.params.id);

// //         get()
// //             .collection("documents")
// //             .find({})
// //             .toArray()
// //             .then(result => {
// //                 res.send({ message: "Get all datas", data: result });
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     },
// //     getById: (req, res) => {
// //         //     const findOne = todos.todo.find(item => {
// //         //         return item.id === Number(req.params.id);

// //         //     });
// //         // console.log(findOne);
// //         console.log(req.body);
        
// //         get()
// //             .collection("documents")
// //             .findOne({ _id: objectId(req.params.id) })
// //             .then(result => {
// //                 res.send({ message: "Get all datas", data: result });
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     },
// //     deleteOne: (req, res) => {
// //         get()
// //         .collection("documents")
// //        .deleteOne( { _id: objectId(req.params.id) } )
// //         .then(result => {
// //             res.send({ message: "Get all datas", data: result });
// //         })
// //         .catch(error => {
// //             console.log(error);
// //         });



// //         // let newTodo = todos.todo.filter(
// //         //     item => item.id !== parseInt(req.params.id)
// //         // );

// //         // res.send(newTodo);
// //     },
// //     addOne: (req, res) => {
// //         console.log(req.body);
        
// //         get()
// //             .collection("documents")
// //             .insertOne(req.body)
// //             .then(result => {
// //                 res.send({ message: "Data successfully added", data: result });
// //             })
// //             .catch(error => {
// //                 console.log(error);
// //             });
// //     },

// //     updateOne: (req, res) => {
// //         get()
// //         .collection("documents")
// //         .update({ _id: objectId(req.params.id) },{$set: req.body} )
// //         .then(result => {
// //             res.send({ message: "Get all datas", data: result });
// //         })
// //         .catch(error => {
// //             console.log(error);
// //         });
// //     }
// // };










// // // const { user: users } = require("../../models");

// // // const getAll = (req, res) => {
// // //     res.send(users);
// // // };

// // // module.exports = {
// // //     getAll
// // // };
