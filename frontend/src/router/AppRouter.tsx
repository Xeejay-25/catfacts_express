import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Play from "../pages/Play";
import UserSelect from "../pages/UserSelect";
import UserCreate from "../pages/UserCreate";
import Game from "../pages/Game";
import History from "../pages/History";
import Leaderboard from "../pages/Leaderboard";
import Dashboard from "../pages/Dashboard";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/play" element={<Play />} />
                <Route path="/play/select" element={<UserSelect />} />
                <Route path="/play/create" element={<UserCreate />} />
                <Route path="/game" element={<Game />} />
                <Route path="/history" element={<History />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
