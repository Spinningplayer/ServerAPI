var statsController = require('../controllers/statisticsController');

module.exports = (app) => {
    app.get('/stats', statsController.getCurrentStats);
    app.get('/stats/graph', statsController.getStatsGraph);
}