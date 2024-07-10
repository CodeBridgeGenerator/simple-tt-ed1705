
module.exports = function (app) {
  const modelName = 'mail_ques';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      name: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      type: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      data: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      from: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      recipients: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      status: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      errors: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      template: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
      content: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },

            
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