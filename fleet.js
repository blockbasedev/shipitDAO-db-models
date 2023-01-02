import { Schema, model } from 'mongoose';

const FleetSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetName: { type: String },
    fleetImage: { type: String },
    fleetLocation: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('fleet', FleetSchema);
