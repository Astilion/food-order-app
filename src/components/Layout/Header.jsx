import styles from "./Header.module.scss";
import HeroImg from "../../assets/meals.jpg";
const Header = props => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<button>YourCart</button>
			</header>
			<div className={styles["main-image"]}>
				<img src={HeroImg} alt='A table of food.' />
			</div>
		</>
	);
};

export default Header;
