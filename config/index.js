const {
    PORT,
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    JWT_SECRET_KEY
} = require("./environment");
const { connect, get, close } = require("./connection");

module.exports = {
    PORT: PORT,
    DATABASE_HOST: DATABASE_HOST,
    DATABASE_PASSWORD: DATABASE_PASSWORD,
    DATABASE_NAME: DATABASE_NAME,
    connect: connect,
    get: get,
    close: close,
    JWT_SECRET_KEY
};



















// // const { PORT, DATABASE, DATABASE_PASSWORD } = require("./environment");

// // module.exports = {
// //     PORT: PORT,
// //     DATABASE: DATABASE,
// //     DATABASE_PASSWORD: DATABASE_PASSWORD
// // };

// const {
//     PORT,
//     DATABASE_HOST,
//     DATABASE_PASSWORD,
//     DATABASE_NAME
// } = require("./environment");
// const { connect, get, close } = require("./connection");

// module.exports = {
//     PORT: PORT,
//     DATABASE_HOST: DATABASE_HOST,
//     DATABASE_PASSWORD: DATABASE_PASSWORD,
//     DATABASE_NAME: DATABASE_NAME,
//     connect: connect,
//     get: get,
//     close: close
// };