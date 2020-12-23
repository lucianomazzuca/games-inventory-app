const Developer = require('../models/developer');

module.exports = {
    index: async (req, res) => {
        const developers = await Developer.find();
        res.render('developer_list', {
            title: 'Developers list',
            developers
        })
    }
}