const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');
const connection = new IORedis({
  maxRetriesPerRequest: null,
});

// Create and export the job queue
// const mailQue = new Queue('mailQue', { connection });
const createMailQueWorker = (app) => {
  const worker = new Worker(
    'mailQue',
    async (job) => {
      const { id, data } = job;
      // Add your job processing logic here
      console.log(id, data);
    },
    { connection },
  );

  // Event listeners for worker
  worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error ${err.message}`);
  });

  // const mailQueService = app.service("mailQue");
  // mailQueService.hooks({
  //   after: {
  //     create: async (context) => {
  //       const { result } = context;
  //       await mailQue.add("mailQue", result);
  //       return context;
  //     },
  //   },
  // });
};

module.exports = { createMailQueWorker };
