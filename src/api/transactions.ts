import type { Transaction, TransactionFilters, SortOption, TransactionCreate } from '../types/transaction';

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

    if (!response.ok) {
        throw new Error(`Fehler beim Laden der Buchungen: ${response.statusText}`);
    }

    return response.json();
}

export async function createTransaction(data: Partial<TransactionCreate>): Promise<{id: number}> {
    const response = await fetch(`${API_URL}/transactions/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Fehler beim Erstellen der Buchung: ${response.statusText} - Data: ${JSON.stringify(data)}`);
    }

    return response.json();
}

export async function deleteTransaction(id: number): Promise<void> {
    const response = await fetch(`${API_URL}/transactions/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error(`Fehler beim Löschen der Buchung: ${response.statusText}`);
    }
}
