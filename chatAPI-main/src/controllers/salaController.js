const { listarSalas } = require("../modes/salaModel");

exports.get = async () => {
    return await listarSalas();
};