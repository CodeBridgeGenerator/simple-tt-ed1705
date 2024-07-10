const { Queue, Worker } = require('bullmq');
const IORedis = require('ioredis');
const connection = new IORedis({
  maxRetriesPerRequest: null,
});

// Create and export the job queue
const jobQueue = new Queue('jobQueue', { connection });

// Create and export the worker
const createJobQueWorker = (app) => {
  const worker = new Worker(
    'jobQueue',
    async (job) => {
      const { id, data } = job;
      // Add your job processing logic here
      const sourceData = await app.service(job.data.service).find({});
      const dynaFields = await app.service('dynaFields').find({});
      console.log(id, data);
      console.log(dynaFields);
      const inserts = [];
      sourceData.forEach((row) => {
        Object.entries(row).forEach((field) => {
          console.log('field',field[0],'value',field[2]);
          const _data = {
            emp : 'ere'
          };
          inserts.push(_data);
        });

      });
    },
    { connection },
  );

  // Event listeners for worker
  worker.on('completed', (job) => {
    console.log(`Job ${job.id} completed successfully`);
    console.log(`Job ${job.data} completed successfully`);
  });

  worker.on('failed', (job, err) => {
    console.error(`Job ${job.id} failed with error ${err.message}`);
  });

  const jobQueService = app.service('jobQues');
  jobQueService.hooks({
    after: {
      create: async (context) => {
        const { result } = context;
        await jobQueue.add('dynaLoader', result);
        return context;
      },
    },
  });
};

module.exports = { createJobQueWorker };
