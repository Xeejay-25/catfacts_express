import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserCreate() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return alert("Please enter a name!");
        navigate("/game"); // Go to game after creation
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200">
            <h1 className="text-4xl font-bold mb-6">Create New Player ✨</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg p-8 rounded-xl w-80 flex flex-col items-center"
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-6 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg w-full transition"
                >
                    Start Playing
                </button>
            </form>
        </div>
    );
}
