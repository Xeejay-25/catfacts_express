import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-200 via-emerald-200 to-teal-200 text-gray-800">
            <h1 className="text-5xl font-bold mb-6">Admin Dashboard ⚙️</h1>
            <p className="text-lg mb-10">Monitor players, view scores, and manage stats.</p>

            <div className="flex flex-wrap justify-center gap-8">
                <Link
                    to="/history"
                    className="bg-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition"
                >
                    📜 Game History
                </Link>
                <Link
                    to="/leaderboard"
                    className="bg-white px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition"
                >
                    🏆 Leaderboard
                </Link>
            </div>

            <Link to="/" className="mt-10 text-blue-600 hover:underline">
                Back to Home
            </Link>
        </div>
    );
}
