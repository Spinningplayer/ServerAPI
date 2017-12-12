const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatsSchema = new Schema({
    cpuLoad: {
        type: Number,
        required: true
    },
    ramUsage: {
        type: Number,
        required: true
    }
});

const Stats = mongoose.model('Stats', StatsSchema);
module.exports = Stats;