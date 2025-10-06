import { Link } from "react-router-dom";

export default function Leaderboard() {
    const leaders = [
        { name: "Philip", score: 40 },
        { name: "Carl", score: 35 },
        { name: "Arn", score: 28 },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200">
            <h1 className="text-5xl font-bold mb-8">Leaderboard 🏆</h1>

            <div className="bg-white shadow-lg rounded-lg p-8">
                {leaders.map((l, i) => (
                    <div
                        key={i}
                        className="flex justify-between w-80 mb-4 text-xl border-b border-gray-200 pb-2"
                    >
                        <span>{l.name}</span>
                        <span className="font-semibold">{l.score}</span>
                    </div>
                ))}
            </div>

            <Link to="/" className="mt-10 text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
