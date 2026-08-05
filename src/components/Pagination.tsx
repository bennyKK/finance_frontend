interface Props {
    page: number;
    onPageChange: (newPage: number) => void;
}

export default function Pagination({ page, onPageChange }: Props) {
    return (
        <div className="pagination">
            <button onClick={() => onPageChange(page - 1)} disabled={page <= 1}>
                ← Zurück
            </button>
            <span>{page}</span>
            <button onClick={() => onPageChange(page + 1)}>
                Weiter →
            </button>
        </div>
    );
}