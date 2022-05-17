import "./App.css";
import Header from "./app/components/header/Header";
import { HashRouter } from "react-router-dom";
import Footer from "./app/components/footer/Footer";
import Main from "./app/components/main/Main";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<Header />
				<Main />
				<Footer />
			</div>
		</HashRouter>
	);
}

export default App;
