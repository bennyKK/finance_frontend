import { type ReactNode, useRef, useState } from 'react';
import { ConfirmDeleteModal } from './ConfirmDeleteModal';

interface SwipeableTransactionProps {
    transaction: { id: number };
    onDelete: (id: number) => void;
    onClick: () => void;
    children: ReactNode;
}

export default function SwipeableTransaction({ transaction, onDelete, onClick, children }: SwipeableTransactionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [offset, setOffset] = useState(0);
    const [confirmOpen, setConfirmOpen] = useState(false);

    function onTouchStart(e: React.TouchEvent) {
        ref.current!.dataset.startX = e.touches[0].clientX.toString();
    }

    function onTouchMove(e: React.TouchEvent) {
        const startX = parseFloat(ref.current!.dataset.startX!);
        const currentX = e.touches[0].clientX;
        const delta = currentX - startX;
        
        if (delta < 0) { // Only allow swiping left
            setOffset(delta);
        }
    }

    function onTouchEnd() {
        if (offset < -80) { // If swiped left more than 100px
            setConfirmOpen(true);
        } else if (offset > 80) { // If swiped right more than 100px
            //
        } else if (offset == 0) { // If swiped less than 100px
            onClick(); // Reset offset
        }

        setOffset(0);
    }

    return (
        <>
            <ConfirmDeleteModal
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={() => {
                    onDelete(transaction.id);
                    setConfirmOpen(false);
                }}
            />
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600 flex items-center justify-end pr-6 text-white font-bold rounded-xl px-4 py-3">
                    Löschen
                </div>
                <div
                    ref={ref}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
                    style={{ transform: `translateX(${offset}px)` }}
                >
                    {children}
                </div>
            </div>
        </>
    );
}