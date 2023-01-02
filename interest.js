import { Schema, model } from 'mongoose';

const InterestSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    shipId: { type: Schema.Types.ObjectId, required: true, ref: 'ship', index: true},
    titleId: { type: Schema.Types.ObjectId, required: true, ref: 'title', index: true},
    name: { type: String },
    image: { type: String },
    eventName: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('interst', InterestSchema);
