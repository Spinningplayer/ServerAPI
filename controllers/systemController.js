const mongo = require('../Config/mongo.db');
var system = require('systeminformation');
var Stats = require('../models/stats');

module.exports = {
    getCurrentStats(callback) {
        system.currentLoad(data => {
            var cpu = Math.round(data.currentload);
            system.mem(memory => {
                var ram = memory.used;
                var stats = new Stats({
                    cpuLoad: cpu,
                    ramUsage: ram
                });
                Stats.create(stats)
                    .then(result => {
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