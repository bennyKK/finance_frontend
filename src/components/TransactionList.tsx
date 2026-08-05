import { deleteTransaction } from '../api/transactions';
import type { Transaction } from '../types/transaction';
import SwipeableTransaction from './TransactionSwipeCard';

interface Props {
    transactions: Transaction[];
    refresh: () => Promise<void>;
    onSelect: (transaction: Transaction) => void;
}

export default function TransactionList({ transactions, refresh, onSelect }: Props) {
    return (
        <div className="space-y-3">
            {transactions.map((transaction) => {
                const isIncome = transaction.amount > 0;

                return (
                    <SwipeableTransaction
                        key={transaction.id}
                        transaction={transaction}
                        onDelete={ async (id) => { 
                            await deleteTransaction(id);
                            await refresh();
                        }}
                        onClick={() => onSelect(transaction)}
                    >
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                                isIncome ? 'bg-emerald-500' : 'bg-rose-500'
                            }`}
                        >
                            {isIncome ? "↑" : "↓"}
                        </div>

                        <div className="flex-1 ml-3">
                            <p className="text-base font-semibold text-gray-900">{transaction.description}</p>
                            <p className="text-xs text-gray-500">{transaction.booking_date}</p>
                        </div>

                        <div className="text-right">
                            <p
                                className={`text-lg font-bold ${
                                    isIncome ? "text-emerald-600" : "text-rose-600"
                                }`}
                            >
                                {transaction.amount.toFixed(2)} €{/*transaction.currency_id*/}
                            </p>
                            <p className="text-xs text-gray-400">
                                {transaction.is_paid ? "Bezahlt" : "Offen"}
                            </p>
                        </div>
                    </SwipeableTransaction>
                );
            })}
        </div>
    );
}