
module.exports = function (app) {
  const modelName = 'mails';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      status: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 0, maxLength: 1000000, index: true, trim: true, default: '' },
      subject: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
      body: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },

            
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