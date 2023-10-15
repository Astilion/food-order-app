import styles from "./Header.module.scss";
import HeroImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton/>
			</header>
			<div className={styles["main-image"]}>
				<img src={HeroImg} alt='A table of food.' />
			</div>
		</>
	);
};

export default Header;
