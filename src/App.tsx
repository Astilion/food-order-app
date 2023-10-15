import { useSelector } from 'react-redux'
import { RootState } from './store/index'
import "./App.scss";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const isShown = useSelector((state: RootState) => state.ui.showCart);
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
