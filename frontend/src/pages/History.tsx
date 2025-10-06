import { Link } from "react-router-dom";

export default function History() {
    const history = [
        { player: "Philip", score: 30, date: "2025-10-06" },
        { player: "Keziah", score: 25, date: "2025-10-05" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 via-blue-100 to-gray-300">
            <h1 className="text-4xl font-bold mb-6">Game History 📜</h1>
            <div className="bg-white rounded-lg shadow-lg p-8">
                {history.map((h, i) => (
                    <div
                        key={i}
                        className="flex justify-between w-96 mb-4 border-b border-gray-200 pb-2"
                    >
                        <span>{h.player}</span>
                        <span>{h.score} pts</span>
                        <span className="text-gray-500">{h.date}</span>
                    </div>
                ))}
            </div>
            <Link to="/" className="mt-8 text-blue-500 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
