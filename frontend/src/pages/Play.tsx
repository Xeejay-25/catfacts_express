import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Play() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 text-gray-800">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold mb-4">Choose How You Want to Play 🐾</h1>
                <p className="text-lg text-gray-600">
                    Select an existing player or create a new one to begin your memory challenge!
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
                <Link to="/play/select">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 px-12 rounded-2xl shadow-lg text-xl"
                    >
                        Select Player
                    </motion.button>
                </Link>

                <Link to="/play/create">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-12 rounded-2xl shadow-lg text-xl"
                    >
                        Create Player
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}
