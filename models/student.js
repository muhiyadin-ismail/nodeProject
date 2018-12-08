module.exports = (sequelize, Sequelize) => {
    return sequelize.define('student', {
        NAME: Sequelize.STRING,
        EMAIL: Sequelize.STRING,
        ADDRESS: Sequelize.STRING,
        NUMBER: Sequelize.STRING,
        BIOGRAPHY: Sequelize.STRING
    })
};
