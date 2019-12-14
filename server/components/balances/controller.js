import { ApiError } from '@common/Errors';

import * as BalanceService from './service';

export async function createBalance(req, res) {
  const {
    user: { _id },
    body: { name, amount },
  } = req;

  const balance = await BalanceService.createBalance({
    name,
    amount,
    user: _id,
  });

  return res.json(balance);
}

export async function getTransactions(req, res) {
  const {
    params: { balanceId },
  } = req;

  const transactions = await BalanceService.getTransactions(balanceId);

  return res.json(transactions);
}

export async function addTransaction(req, res, next) {
  const {
    user: { _id: userId },
    params: { balanceId },
    body,
  } = req;
  const { amount } = body;

  const balance = await BalanceService.getBalanceById(balanceId);

  if (!balance || !BalanceService.belongsToUser(balance, userId)) {
    return next(new ApiError('No balance found'));
  }

  const [transaction, updatedBalance] = await Promise.all([
    BalanceService.addTransaction({
      balance: balanceId,
      ...body,
    }),
    BalanceService.updateAmount(balanceId, amount),
  ]);

  return res.json({ transaction, balance: updatedBalance });
}
