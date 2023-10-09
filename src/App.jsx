import { useSelector } from 'react-redux'
import "./App.scss";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const isShown = useSelector(state => state.ui.showCart);
	return (
		<>
			{isShown && <Cart />}
			<Header />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
