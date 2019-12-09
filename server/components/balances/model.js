import mongoose, { Schema } from 'mongoose';

import { UserModel } from '@components/users';

const BalanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: UserModel,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Balance', BalanceSchema);
