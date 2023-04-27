import "./App.scss";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/home/HomePage.jsx";
import AllGamesPage from "./pages/AllGamesPage/AllGamesPage.jsx";
import RecentlyAddedPage from "./pages/recentlyAdded/RecentlyAddedPage.jsx";
import GameDetailsPage from "./pages/GameDetailsPage/GameDetailsPage.jsx";

const App = () => {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/home" element={<HomePage/>}/>
					<Route path="/all-games" element={<AllGamesPage/>}/>
					<Route path="/recently-added" element={<RecentlyAddedPage/>}/>
					<Route path="/game/:name" element={<GameDetailsPage/>}/>
				</Route>
			</Routes>
		</div>
	);

}

export default App;
