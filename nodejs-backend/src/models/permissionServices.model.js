
module.exports = function (app) {
  const modelName = 'permission_services';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema(
    {
      profile: { type: Schema.Types.ObjectId, ref: 'profiles' },
      service: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
      read: { type: Boolean, required: false, default: true },
      readAll: { type: Boolean, required: false, default: false },
      updateOwn: { type: Boolean, required: false, default: true },
      updateAll: { type: Boolean, required: false, default: false },
      deleteOwn: { type: Boolean, required: false, default: true },
      deleteAll: { type: Boolean, required: false, default: false },

            
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