import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import AllGamesPage from "./pages/AllGamesPage/AllGamesPage.jsx";
import RecentlyAddedPage from "./pages/recentlyAdded/RecentlyAddedPage.jsx";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage.jsx";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all-games" element={<AllGamesPage />} />
        <Route path="/recently-added" element={<RecentlyAddedPage />} />
        <Route path="/game/:name" element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
