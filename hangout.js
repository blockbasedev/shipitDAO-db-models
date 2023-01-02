import { Schema, model } from 'mongoose';

const HangoutSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    shipId: { type: Schema.Types.ObjectId, required: true, ref: 'ship', index: true},
    chooseBlockchain: [{ type: String }],
    typeChain: [{ type: String }],
    endTime: { type: String },
    category: { type: String },
    hangout: [{ type: String }],
    virtualMeetlink: { type: String },
    title: { type: String },
    moreInfo: { type: String },
    recommanded: { type: Boolean, default: false },

  },
  {
    timestamps: true,
  },
);

export default model('hangout', HangoutSchema);
