import styles from "./style.module.css";

function ConsultPage() {
	return (
		<div className={styles["parent"]}>
			<form>
				<h2>TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
				<input
					type="tel"
					name="phone"
					placeholder="Vui lòng nhập số điện thoại"
				/>
				<input
					type="text"
					name="ticket"
					placeholder="Vui lòng nhập mã vé"
				/>
				<button type="submit">TRA CỨU</button>
			</form>
		</div>
	);
}

export default ConsultPage;
