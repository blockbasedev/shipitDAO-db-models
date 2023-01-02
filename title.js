import { Schema, model } from 'mongoose';

const TitleSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    shipId: { type: Schema.Types.ObjectId, required: true, ref: 'ship', index: true},
    titleName: { type: String },
    titleImage: { type: String },
    titleDesignation: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('title', TitleSchema);
