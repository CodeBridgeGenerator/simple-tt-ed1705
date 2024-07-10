const { createJobQueWorker } = require('./processJobQueues');
const { createMailQueWorker } = require('./processEmails');
const createWorker = (app) => {
  createJobQueWorker(app);
  createMailQueWorker(app);
};

module.exports = createWorker;