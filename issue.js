import { Schema, model } from 'mongoose';

const IssueSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    chooseBlockchain: [{ type: String }],
    endTime: { type: String },
    developerCategory: { type: String },    
    title: { type: String },
    moreInfo: { type: String },
    vote: { type: Boolean, default: false },

  },
  {
    timestamps: true,
  },
);

export default model('issue', IssueSchema);