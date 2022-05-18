import { HashRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./app/components/footer";
import { Header } from "./app/components/header";
import { Main } from "./app/components/main";

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
