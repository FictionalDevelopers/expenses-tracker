import BalanceModel from './model';

export function createBalance({ name, amount, user }) {
  return BalanceModel.create({ name, amount, user });
}
