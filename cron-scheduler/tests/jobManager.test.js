const JobManager = require('../src/jobs/jobManager');

describe('JobManager', () => {
    let jobManager;
    beforeEach(() => {
        jobManager = new JobManager();
    });

    test('should add job successfully', () => {
        jobManager.addJob('job1', '30m', '1h', () => {});
        expect(jobManager.jobs.size).toBe(1);
    });

    test('should remove job successfully', () => {
        jobManager.addJob('job1', '30m', '1h', () => {});
        jobManager.removeJob('job1');
        expect(jobManager.jobs.size).toBe(0);
    });

    test('should not add job with duplicate ID', () => {
        jobManager.addJob('job1', '30m', '1h', () => {});
        expect(() => jobManager.addJob('job1', '30m', '1h', () => {})).toThrow('Job with this ID already exists.');
    });
});
