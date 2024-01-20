import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/portfolio-react/" element={<Homepage />} />
				<Route path="/portfolio-react/about" element={<About />} />
				<Route path="/portfolio-react/projects" element={<Projects />} />
				<Route path="/portfolio-react/contact" element={<Contact />} />
				<Route path="/portfolio-react/*" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;
