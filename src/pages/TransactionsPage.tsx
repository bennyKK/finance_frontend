import { useEffect, useState } from 'react';
import type { Transaction, TransactionFilters, SortOption, TransactionCreate } from '../types/transaction';
import { fetchTransactions, createTransaction } from '../api/transactions';

//import TransactionFiltersComponent from '../components/TransactionFilters';
//import TransactionSort from '../components/TransactionSort';
//import Pagination from '../components/Pagination';
import TransactionList from '../components/TransactionList';
import FAB from '../components/FAB';
import NewTransactionModal from '../components/NewTransactionModal';

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filters] = useState<TransactionFilters>({});
    const [sort] = useState<SortOption>('booking_date_desc');
    const [page] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    async function loadTransactions() {
        const data = await fetchTransactions(filters, page, 20, sort);
        console.log('Loaded transactions:', data);
        setTransactions(data);
    }

    async function addTransaction(form: Partial<TransactionCreate>) {
        await createTransaction(form);
        await loadTransactions();
    }

    useEffect(() => {
        loadTransactions();
    }, [filters, sort, page]);

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Buchungen</h1>

            <TransactionList
                transactions={transactions} 
                onSelect={transaction => console.log(transaction)}
                refresh={loadTransactions}
            />

            <FAB onClick={() => setIsModalOpen(true)} />
            
            <NewTransactionModal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={addTransaction}
            />
        </div>
    );
}