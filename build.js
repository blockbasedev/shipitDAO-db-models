import { Schema, model } from 'mongoose';

const BuildSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    chooseBlockchain: [{ type: String }],
    typeChain: [{ type: String }],
    duration: { type: String },
    category: { type: String },
    categoryName: {type: String },
    lookingfor: [{ type: String }],
    title: { type: String },
    moreInfo: { type: String },
    suggest: { type: Boolean, default: false },

  },
  {
    timestamps: true,
  },
);

export default model('build', BuildSchema);