import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SitusTosora } from "./redirector/situs-tosora";

function App() {
	return (
		<>
			{/* create route */}
			<BrowserRouter>
				<Routes>
					<Route path="/redirect/situs-tosora" element={<SitusTosora />} />
					<Route path="/" element={"ini home"} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
