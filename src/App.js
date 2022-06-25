import { HashRouter } from "react-router-dom";
import "./App.css";
import { Main } from "./app/components/main";
import { Footer, Header } from "./app/shared/components";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<header>
					<Header />
				</header>
				<Main />
				<footer>
					<Footer />
				</footer>
			</div>
		</HashRouter>
	);
}

export default App;
