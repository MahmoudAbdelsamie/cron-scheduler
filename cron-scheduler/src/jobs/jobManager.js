const Job = require('./job');
const { logExecution } = require('../utils/logger');

class JobManager {
    constructor() {
        this.jobs = new Map();
        this.startScheduler();
    }

    addJob(id, interval, frequency, func) {
        if (this.jobs.has(id)) {
            throw new Error('Job with this ID already exists.');
        }
        const job = new Job(id, interval, frequency, func);
        this.jobs.set(id, job);
    }

    removeJob(id) {
        this.jobs.delete(id);
    }

    startScheduler() {
        setInterval(() => {
            const now = Date.now();
            this.jobs.forEach(job => {
                if (now >= job.nextRun) {
                    this.executeJob(job);
                    job.nextRun = now + job.parseInterval(job.frequency);
                }
            });
        }, 1000);
    }

    executeJob(job) {
        const start = Date.now();
        job.func();
        const end = Date.now();
        logExecution(job.id, start, end);
    }
}

module.exports = JobManager;
