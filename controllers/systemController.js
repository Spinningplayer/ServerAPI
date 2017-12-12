const mongo = require('../Config/mongo.db');
var system = require('systeminformation');
var Stats = require('../models/stats');

module.exports = {
    getCurrentStats(callback) {
        system.currentLoad(data => {
            var cpu = Math.round(data.currentload);
            system.mem(memory => {
                var stats = new Stats({
                    cpuLoad: cpu,
                    ramUsage: memory.used
                });
                console.log(stats);
                Stats.create(stats)
                    .then(result => {
                        console.log(result);
                        callback(result);
                    });
            })
        })
    },

    getStatsGraph(callback) {
        Stats.find({}).limit(25)
            .then(data => {
                callback(data);
            })
    }
}