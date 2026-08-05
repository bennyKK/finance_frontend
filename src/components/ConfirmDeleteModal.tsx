interface ConfirmDeleteModalProps {
    open: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

export function ConfirmDeleteModal({ open, onCancel, onConfirm }: ConfirmDeleteModalProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-xl space-y-4 animate=[fadeIn_0.2s_ease-out]">
                <h2 className="text-xl font-bold text-red-600">Buchung löschen?</h2>

                <div className="text-gray-700">
                    <p>Möchtest du diese Buchung wirklich löschen?</p>
                </div>

                <div className="flex gap-3 pt-2">
                    <button
                        onClick={onCancel}
                        className="flex-1 bg-gray-200 py-3 rounded-lg active:scale-95"
                    >
                        Abbrechen
                    </button>

                    <button
                        className="flex-1 bg-red-600 text-white py-3 rounded-lg shadow active:scale-95"
                        onClick={onConfirm}
                    >
                        Löschen
                    </button>
                </div>
            </div>
        </div>
    );
}