import { Schema, model } from 'mongoose';

const EventSchema = new Schema(
  {
    userId: {
        type: Schema.Types.ObjectId, required: true, ref: 'user', index: true,
    },
    fleetId: { type: Schema.Types.ObjectId, required: true, ref: 'fleet', index: true},
    shipId: { type: Schema.Types.ObjectId, required: true, ref: 'ship', index: true},
    coverImage: { type: String },
    category: { type: String },    
    eventName: { type: String },
    location: { type: String },
    time: { type: String },
    host: [{ type: String }],
    description: [{ type: String }],
    eventEmail: { type: String },
    guest: { type: String },
    about: { type: String },
    vote: { type: Boolean, default: false },

  },
  {
    timestamps: true,
  },
);

export default model('event', EventSchema);