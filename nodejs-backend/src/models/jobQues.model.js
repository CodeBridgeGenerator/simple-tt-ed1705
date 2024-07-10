
module.exports = function (app) {
  const modelName = 'job_ques';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      type: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      data: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      service: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      start: { type: Date, required: false },
      end: { type: Date, required: false },

            
      createdBy: { type: Schema.Types.ObjectId, ref: 'users', required: true },
      updatedBy: { type: Schema.Types.ObjectId, ref: 'users', required: true }
    },
    {
      timestamps: true
    });
      
       
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
        
};