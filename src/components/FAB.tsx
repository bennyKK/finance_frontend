interface Props {
    onClick: () => void;
}

export default function FAB({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-24 right-4 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl active:scale-95"
        >
            +
        </button>
    );
}