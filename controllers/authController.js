const authService = require('../services/authService');

module.exports = {
    async getLoginForm(req, res) {
        await authService.getLoginForm(req, res);
    },
};
