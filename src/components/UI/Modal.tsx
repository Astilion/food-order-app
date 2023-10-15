import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

interface ModalProps {
	children: ReactNode;
}

const Backdrop: React.FC = () => {
	const dispatch = useDispatch();
	const backdropHandler = () => {
		dispatch(uiActions.toggleCart());
	};
	return <div className={styles.backdrop} onClick={backdropHandler}></div>;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
	const portalElement = document.getElementById("overlays");

	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, portalElement!)}
			{ReactDOM.createPortal(
				<div className={styles.modal}>
					<div className={styles.content}>{children}</div>
				</div>,
				portalElement!
			)}
		</>
	);
};

export default Modal;
