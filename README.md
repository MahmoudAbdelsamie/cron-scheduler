# Cron Scheduler

## Brief Description
This project is an in-process cron scheduler implemented in JavaScript. It allows clients to schedule jobs that run periodically. Each job can specify an interval for a single run, a frequency for repeated runs, a unique identifier, and the job implementation as a function.

## Technical Decisions
### Custom Scheduling Logic
We implemented the scheduling logic from scratch without using any external libraries to have full control over the scheduling process. This allows us to understand and optimize the scheduler according to our specific requirements.

### Concurrency
JavaScript's asynchronous nature was leveraged to handle concurrent job executions. By using non-blocking I/O operations and managing job executions through intervals, we ensure that multiple jobs can run concurrently without affecting each other’s performance.

### Job Identification and Management
Each job is assigned a unique identifier, which ensures that jobs can be individually managed (added, removed, or rescheduled). This approach provides flexibility in handling various job scenarios and requirements.

### Logging and Instrumentation
We instrumented each job run to log the execution time and details. This includes logging the start time, end time, and duration of each job execution. Such logging helps in monitoring job performance and diagnosing issues if they arise.

### Error Handling
Basic error handling is implemented to manage cases where invalid intervals are provided. More robust error handling can be added to handle various edge cases and ensure the scheduler remains stable.

### Tests
Unit tests are included to ensure the correct functionality of the Job and JobManager classes. These tests cover the creation of jobs, interval parsing, adding/removing jobs, and handling of job executions.

## Trade-offs
- **No External Libraries**: By avoiding scheduling libraries, we reduce dependencies and potential security risks, but at the cost of writing more boilerplate code.
- **In-Process Scheduler**: Running the scheduler within a single process is simpler but may not be suitable for distributed systems or for applications requiring high availability and fault tolerance.

## Example Usage
\`\`\`javascript
const JobManager = require('./src/jobs/jobManager');

const jobManager = new JobManager();

jobManager.addJob('job1', '30m', '1h', () => {
    console.log('Executing job1...');
});

jobManager.addJob('job2', '15m', '2h', () => {
    console.log('Executing job2...');
});
\`\`\`

## Future Improvements
- **Distributed Scheduling**: Extend the scheduler to support distributed environments.
- **Advanced Time Parsing**: Improve interval parsing to support more complex schedules.
- **Web Interface**: Create a web interface for managing and monitoring jobs.

