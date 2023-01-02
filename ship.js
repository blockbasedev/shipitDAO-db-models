import { Schema, model } from 'mongoose';

const ShipSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    shipName: { type: String },
    shipImage: { type: String },
  },
  {
    timestamps: true,
  },
);

export default model('ship', ShipSchema);
