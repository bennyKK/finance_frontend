import { useState } from 'react';
import type { Transaction } from '../types/transaction';

interface Props {
    open: boolean;
    onClose: () => void;
    onCreate: (data: Partial<Transaction>) => void;
}

export default function NewTransactionModal({ open, onClose, onCreate }: Props) {
    const [form, setForm] = useState<Partial<Transaction>>({});

    if (!open) return null;

    function update<K extends keyof Transaction>(key: K, value: Transaction[K]) {
        setForm({ ...form, [key]: value });
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl space-y-4">
                <h2 className="text-xl font-bold">Neue Buchung</h2>

                <input
                    type="date"
                    className="w-full p-2 border rounded"
                    onChange={(e) => update('booking_date', e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Beschreibung"
                    className="w-full p-2 border rounded"
                    onChange={(e) => update('description', e.target.value)}
                />  

                <input
                    type="number"
                    placeholder="Betrag"
                    className="w-full p-2 border rounded"
                    onChange={(e) => update('amount', parseFloat(e.target.value))}
                />

                <button
                    className="w-full bg-blue-600 text-white py-2 rounded-lg"
                    onClick={() => {
                        onCreate(form);
                        onClose();
                    }}
                >
                    Speichern
                </button>
            </div>
        </div>
    );
}