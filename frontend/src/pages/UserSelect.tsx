import { Link } from "react-router-dom";

export default function UserSelect() {
    const players = ["Philip", "Carl", "Keziah", "Arn"];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 via-teal-200 to-green-200">
            <h1 className="text-4xl font-bold mb-6">Select Your Player 🧠</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {players.map((player) => (
                    <button
                        key={player}
                        className="bg-white shadow-md px-8 py-4 rounded-xl text-2xl font-semibold hover:scale-105 transition"
                    >
                        {player}
                    </button>
                ))}
            </div>

            <Link
                to="/play"
                className="mt-10 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800"
            >
                Back
            </Link>
        </div>
    );
}
