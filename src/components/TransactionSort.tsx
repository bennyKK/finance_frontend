import type { SortOption } from '../types/transaction';

interface Props {
    onSort: (sort: SortOption) => void;
}

export default function TransactionSort({ onSort }: Props) {
    return (
        <select onChange={(e) => onSort(e.target.value as SortOption)}>
            <option value="booking_date_desc">Datum ↓</option>
            <option value="booking_date_asc">Datum ↑</option>
            <option value="amount_desc">Betrag ↓</option>
            <option value="amount_asc">Betrag ↑</option>
            <option value="project_desc">Projekt ↓</option>
            <option value="project_asc">Projekt ↑</option>
        </select>
    );
}