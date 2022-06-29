import { HashRouter, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Main } from "./app/components/main";
import { Footer, Header } from "./app/shared/components";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header>
					<Header />
				</header>
				<Main />
				<footer>
					<Footer />
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
