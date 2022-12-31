const {Type} = require('../models/modes');
const ApiError = require('../error/apiError');


class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
    }

    async getAll(req, res) {

    }

};

module.exports = new TypeController();