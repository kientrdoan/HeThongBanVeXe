import styles from "./style.module.css";

function OursPage() {
	return (
		<div className={styles["parent"]}>
			<div className={styles["author"]}>
				<img src="" alt="" />
				<div className={styles["information"]}>
					<h2>ĐINH HỒNG KÔNG</h2>
					<h4>N20DCCN029</h4>
					<h4>D20CQCNPM01-N</h4>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
			<div className={styles["author"]}>
				<div className={styles["information"]}>
					<h2>ĐOÀN TRUNG KIÊN</h2>
					<h4>N20DCCN027</h4>
					<h4>D20CQCNPM01-N</h4>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<img src="" alt="" />
			</div>
			<div className={styles["author"]}>
				<img src="" alt="" />
				<div className={styles["information"]}>
					<h2>PHU DỰ THẮNG</h2>
					<h4>N20DCCN146</h4>
					<h4>D20CQCNPM02-N</h4>
					<ul>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default OursPage;
