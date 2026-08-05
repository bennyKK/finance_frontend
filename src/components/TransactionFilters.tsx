import { useState } from "react";
import type { TransactionFilters } from "../types/transaction";

interface Props {
    onFilter: (filters: TransactionFilters) => void;
}

export default function TransactionFilters({ onFilter }: Props) {
    const [filters, setFilters] = useState<TransactionFilters>({});

    function update<K extends keyof TransactionFilters>(key: K, value: TransactionFilters[K]) {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilter(newFilters);
    }

    return (
        <div className="transaction-filters">
            <input
                placeholder="Konto ID"
                type="number"
                onChange={(e) => update("account_id", e.target.value ? Number(e.target.value) : undefined)}
            />

            <input
                placeholder="Datum von"
                type="date"
                onChange={(e) => update("from_date", e.target.value || undefined)}
            />
            <input
                placeholder="Datum bis"
                type="date"
                onChange={(e) => update("to_date", e.target.value || undefined)}
            />

            <input
                placeholder="Projekt ID"
                type="number"
                onChange={(e) => update("project_id", e.target.value ? Number(e.target.value) : undefined)}
            />

            <input
                placeholder="Beschreibung"
                type="text"
                onChange={(e) => update("description", e.target.value || undefined)}
            />

            <input
                placeholder="Währung ID"
                type="number"
                onChange={(e) => update("currency_id", e.target.value ? Number(e.target.value) : undefined)}
            />

            <select onChange={(e) => update("is_paid", e.target.value ? e.target.value === "true" : undefined)}>
                <option value="">Alle</option>
                <option value="true">Bezahlt</option>
                <option value="false">Offen</option>
            </select>
        </div>
    );
}