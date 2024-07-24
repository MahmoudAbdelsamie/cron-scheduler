const JobManager = require('./jobs/jobManager');

const jobManager = new JobManager();

jobManager.addJob('job1', '30m', '1h', () => {
    console.log('Executing job1...');
});

jobManager.addJob('job2', '15m', '2h', () => {
    console.log('Executing job2...');
});
