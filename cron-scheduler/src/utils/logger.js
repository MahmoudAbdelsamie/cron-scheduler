const logExecution = (jobId, start, end) => {
    console.log(`Job ${jobId} executed at ${new Date(start).toISOString()}`);
    console.log(`Execution time: ${end - start}ms`);
};

module.exports = { logExecution };
