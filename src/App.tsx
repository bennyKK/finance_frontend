import TransactionsPage from './pages/TransactionsPage';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <main className="flex-1 p-4 pb-20">
                <TransactionsPage />
            </main>

            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2">
                <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                    <span className="text-xl">💰</span>
                    <span className="text-xs">Buchungen</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                    <span className="text-xl">🧮</span>
                    <span className="text-xs">Analyse</span>
                </button>
                <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                    <span className="text-xl">🎚️</span>
                    <span className="text-xs">Einstallungen</span>
                </button>
            </nav>
        </div>
    );
}