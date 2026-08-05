import type { Transaction, TransactionFilters, SortOption } from '../types/transaction';

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchTransactions(
    filters: TransactionFilters = {},
    page: number = 1,
    pageSize: number = 20,
    sort: SortOption = 'booking_date_desc'
): Promise<Transaction[]> {
    const params = new URLSearchParams({
        ...Object.fromEntries(
            Object.entries(filters).filter(([_, v]) => v !== undefined && v !== "")
        ),
        page: String(page),
        page_size: String(pageSize),
        sort: sort,
    });

    const response = await fetch(`${API_URL}/transactions/filter?${params.toString()}`);
    return response.json();
}

export async function createTransaction(data: Partial<Transaction>): Promise<{id: number}> {
    const response = await fetch(`${API_URL}/transactions/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}