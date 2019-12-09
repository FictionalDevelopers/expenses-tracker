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
