import mongoose, { Schema } from 'mongoose';

import BalanceModel from '@components/balances/model';

const TransactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    balance: {
      type: Schema.Types.ObjectId,
      ref: BalanceModel,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Transaction', TransactionSchema);
