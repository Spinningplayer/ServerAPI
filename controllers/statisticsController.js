var SystemController = require('./systemController');

module.exports = {
    getCurrentStats(req, res) {
        SystemController.getCurrentStats(stats => {
            res.status(200);
            res.json(stats);
        });
    },

    getStatsGraph(req, res) {
        SystemController.getStatsGraph(stats => {
            res.status(200);
            res.json(stats);
        })
    }
}