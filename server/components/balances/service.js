import {
  DEFAULT_FIND_OPTIONS,
  DEFAULT_LIMIT,
  DEFAULT_SKIP,
} from '@components/transactions/constants';
import TransactionModel from '@components/transactions/model';

import BalanceModel from './model';

export function createBalance({ name, amount, user }) {
  return BalanceModel.create({ name, amount, user });
}

export function belongsToUser(balance, userId) {
  return balance.user.equals(userId);
}

export function getBalanceById(balanceId) {
  return BalanceModel.findById(balanceId);
}

export function getTransactions(
  balance,
  { limit = DEFAULT_LIMIT, skip = DEFAULT_SKIP } = DEFAULT_FIND_OPTIONS,
  fields = [],
) {
  return TransactionModel.find(
    { balance },
    fields.length ? fields.join(' ') : null,
    { skip, limit },
  );
}

export async function updateAmount(balanceId, amount) {
  const balance = await BalanceModel.findById(balanceId);
  balance.amount += amount;
  return balance.save();
}

export async function addTransaction({ balance, amount, note, date }) {
  return TransactionModel.create({
    amount,
    note,
    balance,
    date: new Date(date).toISOString(),
  });
}
