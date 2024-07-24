const Job = require('../src/jobs/job');

describe('Job', () => {
    test('should parse interval correctly', () => {
        const job = new Job('test', '30m', '1h', () => {});
        expect(job.parseInterval('30m')).toBe(1800000);
    });

    test('should throw error for invalid interval', () => {
        expect(() => new Job('test', '30x', '1h', () => {})).toThrow('Invalid interval unit');
    });
});
