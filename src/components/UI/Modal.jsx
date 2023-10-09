import styles from "./Modal.module.scss";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import ReactDOM from "react-dom";

const Backdrop = props => {
	const dispatch = useDispatch();
	const backdropHandler = () => {
		dispatch(uiActions.toggleCart());
	};
	return <div className={styles.backdrop} onClick={backdropHandler}></div>;
};
const ModalOverlay = props => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = props => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				portalElement
			)}
		</>
	);
};

export default Modal;
