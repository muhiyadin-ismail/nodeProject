const Sequelize = require('sequelize');

// Env settings
const env = require('./config/env');

// Model creator functions.
const StudentModel = require('./models/student');


// Connection.
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    pool: env.pool,
    operatorsAliases: false
});

// Actual model.
const Student = StudentModel(sequelize, Sequelize);

// Sync database.
sequelize
    .sync()
    .then(() => console.log("Database and tables created!"));

// Exports.
module.exports = {
    Student
}