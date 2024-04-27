import styles from "./style.module.css";

function ContactPage() {
	return (
		<div className={styles["parent"]}>
			<h3>GỬI THÔNG TIN LIÊN HỆ ĐẾN CHÚNG TÔI</h3>
			<form className={styles["mail-form"]}>
				<div>
					<input
						type="text"
						id={styles["company"]}
						value="TÊN CÔNG TY"
						readOnly
					/>
					<input
						type="text"
						name="fullname"
						placeholder="Họ và tên"
					/>
				</div>
				<div>
					<input type="email" name="email" placeholder="Email" />
					<input
						type="tel"
						name="phone"
						placeholder="Số điện thoại"
					/>
				</div>
				<input type="text" name="title" placeholder="Tiêu đề" />
				<textarea
					name="content"
					cols="30"
					rows="4"
					placeholder="Ghi chú"
				></textarea>

				<button type="submit">GỬI</button>
			</form>
		</div>
	);
}

export default ContactPage;
