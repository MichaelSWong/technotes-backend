import mongoose, { Schema, Document } from 'mongoose';
const AutoIncrement = require('mongoose-sequence')(mongoose);

export interface INote extends Document {
  user: any;
  title: string;
  text: string;
  completed: boolean;
  inc_field?: string;
  id?: string;
  start_seq?: number;
}

const noteSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

noteSchema.plugin(AutoIncrement, {
  inc_field: 'ticket',
  id: 'ticketNums',
  start_seq: 500,
  disable_hooks: true,
});

const Note = mongoose.model<INote>('Note', noteSchema);

export default Note;
