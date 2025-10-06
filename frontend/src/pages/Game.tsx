import { useState } from "react";
import { Link } from "react-router-dom";

export default function Game() {
    const [moves, setMoves] = useState(0);
    const [score, setScore] = useState(0);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 via-pink-200 to-red-200 text-gray-800">
            <h1 className="text-4xl font-bold mb-4">Memory Game 🧩</h1>

            <div className="bg-white shadow-md rounded-xl p-6 text-center">
                <p className="text-xl mb-2">Moves: {moves}</p>
                <p className="text-xl mb-4">Score: {score}</p>
                <button
                    onClick={() => setMoves(moves + 1)}
                    className="bg-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Simulate Move
                </button>
            </div>

            <Link
                to="/leaderboard"
                className="mt-8 bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800"
            >
                View Leaderboard
            </Link>
        </div>
    );
}
