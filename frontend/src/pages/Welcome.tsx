import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-gray-900 bg-[linear-gradient(145deg,#d8cbff_0%,#c4c6f8_35%,#c2d1ff_100%)]">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-14"
            >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div
                        animate={{
                            rotate: [0, -10, 10, -5, 5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                        className="text-7xl sm:text-8xl"
                    >
                        🐱
                    </motion.div>
                    <h1 className="text-5xl sm:text-6xl font-extrabold">Cat Facts</h1>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mt-3">
                    Memory Game
                </h2>
                <p className="mt-6 text-gray-700 max-w-xl mx-auto text-lg leading-relaxed">
                    Match cards, score points, and discover fascinating cat facts! Test
                    your memory skills while learning amazing things about our feline
                    friends.
                </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
                <Link to="/play">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-[0_8px_20px_rgba(60,160,255,0.3)] text-lg flex items-center justify-center gap-2"
                    >
                        🎮 Play
                    </motion.button>
                </Link>

                <Link to="/leaderboard">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-4 px-10 rounded-2xl shadow-[0_8px_20px_rgba(255,170,50,0.3)] text-lg flex items-center justify-center gap-2"
                    >
                        🏆 View Leaderboard
                    </motion.button>
                </Link>
            </motion.div>

            {/* Floating Emojis */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex justify-center space-x-10"
            >
                {["🎴", "🎯", "⭐", "🧠", "💫"].map((emoji, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 2 + i * 0.2,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                        }}
                        className="text-3xl opacity-70"
                    >
                        {emoji}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
