class Job {
    constructor(id, interval, frequency, func) {
        this.id = id;
        this.interval = interval;
        this.frequency = frequency;
        this.func = func;
        this.nextRun = Date.now() + this.parseInterval(interval);
    }

    parseInterval(interval) {
        const time = parseInt(interval.slice(0, -1));
        const unit = interval.slice(-1);
        switch (unit) {
            case 'm': return time * 60 * 1000;
            case 'h': return time * 60 * 60 * 1000;
            case 'd': return time * 24 * 60 * 60 * 1000;
            default: throw new Error('Invalid interval unit');
        }
    }
}

module.exports = Job;
