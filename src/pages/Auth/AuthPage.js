import styles from "./style.module.css";
import iconCoach from "../../asserts/icon_coach.png";
import iconWorld from "../../asserts/icon_world.png";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, notification, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { useDispatch } from "react-redux";

function AuthPage() {
	let dispatch= useDispatch()
	const navigate = useNavigate();
	const [api, contextHolder] = notification.useNotification();
	const openNotificationWithIcon = (type, message) => {
		api[type]({
			message: 'Thông báo',
			description: message,
		});
	};

	function toggle() {
		const container = document.getElementById("container");
		container.classList.toggle(styles["active"]);
	}

	function handleSignInForm(e) {
		const username = e.target.username.value;
		const password = e.target.password.value;
		e.preventDefault();
		// XỬ LÝ API ĐĂNG NHẬP.
		let promise = Axios({
			url: "http://localhost:8080/auth/login",
			method: "POST",
			data: {
				username: username,
				password: password,
			}
		})
		promise.then((result) => {
			localStorage.setItem(username, result.data.data);
			console.log("signin form", result.data);
			if (result.data.status === 200) {
				openNotificationWithIcon('success', 'Đăng nhập thành công')
				const token = result.data.data
				const data = jwtDecode(token);
				// {customerId: 3, iat: 1718101356, exp: 1718187756}
				console.log("Data", data)
				dispatch({
					type: "INFOR_AUTH",
					inforAuth: {
						username: username,
						data: data
					}
				})
				navigate("/");			
			}
			// else e.preventDefault();

			if (result.data.status === 404) {
				openNotificationWithIcon('error', 'Không tìm thấy tài khoản')
			}
			if (result.data.status === 401) {
				openNotificationWithIcon('error', 'Sai mật khẩu')
			}

		})
		promise.catch((e) => {
			e.preventDefault();
			openNotificationWithIcon('error', 'Đăng nhập không thành công')
			console.log(e);
		})
	}

	function handleSignUpForm(e) {
		// const username = e.target.username.value;
		e.preventDefault();
		const password = e.target.password.value;
		const password2 = e.target.password2.value;
		const username = e.target.username.value;
		if (password !== password2) {
			openNotificationWithIcon('error', 'Mật khẩu nhập lại không trùng')
			return;
		}
		// XỬ LÝ API ĐĂNG KÝ.
		let promise = Axios({
			url: "http://localhost:8080/auth/register",
			method: "POST",
			data: {
				username: username,
				password: password,
			}
		})
		promise.then((result) => {
			// localStorage.setItem(username, result.data.data);
			console.log(result.data.data);
			if (result.data.status == 200) {
				openNotificationWithIcon('success', 'Đăng ký thành công')
			}
			if (result.data.status == 400) {
				openNotificationWithIcon('error', 'Đã tồn tại tài khoản')
			}


		})
		promise.catch((e) => {
			openNotificationWithIcon('success', 'Đăng ký thất bại')
			console.log(e);
		})

	}

	return (
		<div className={styles["parent"]}>
			{contextHolder}
			<div className={styles["container"]} id="container">
				<div
					className={`${styles["form-container"]} ${styles["sign-up"]}`}
				>
					<form onSubmit={handleSignUpForm}>
						<h1>TẠO TÀI KHOẢN</h1>
						<div className={styles["social-icons"]}>
						</div>
						<input
							name="username"
							type="tel"
							placeholder="Số điện thoại"
							required
						/>
						<input
							name="password"
							type="password"
							placeholder="Mật khẩu"
							required
						/>
						<input
							name="password2"
							type="password"
							placeholder="Mật khẩu xác nhận"
							required
						/>
						<button type="submit" style={{ marginTop: "20px" }}>
							Đăng ký
						</button>
					</form>
				</div>

				<div
					className={`${styles["form-container"]} ${styles["sign-in"]}`}
				>
					<form onSubmit={handleSignInForm}>
						<h1>ĐĂNG NHẬP</h1>
						<div className={styles["social-icons"]}>
							{/* <a href="#" className={styles["icon"]}>
								<i className="fa-brands fa-google-plus-g"></i>
							</a>
							<a href="#" className={styles["icon"]}>
								<i className="fa-brands fa-facebook-f"></i>
							</a>
							<a href="#" className={styles["icon"]}>
								<i className="fa-brands fa-github"></i>
							</a>
							<a href="#" className={styles["icon"]}>
								<i className="fa-brands fa-linkedin-in"></i>
							</a> */}
						</div>
						<input
							name="username"
							type="tel"
							placeholder="Số điện thoại"
							required
						/>
						<input
							name="password"
							type="password"
							placeholder="Mật khẩu"
							required
						/>
						<NavLink >Quên mật khẩu?</NavLink>
						<button type="submit">Đăng nhập</button>
					</form>
				</div>

				<div className={styles["toggle-container"]}>
					<div className={styles["toggle"]}>
						<div
							className={`${styles["toggle-panel"]} ${styles["toggle-left"]}`}
						>
							<img src={iconWorld} alt="" />
							<p>
								Hãy đăng nhập để có thể cùng chúng tôi đi khắp
								mọi miền đất nước
							</p>
							<button
								className={styles["hidden"]}
								id="sign-in"
								onClick={toggle}
							>
								Đăng nhập
							</button>
						</div>
						<div
							className={`${styles["toggle-panel"]} ${styles["toggle-right"]}`}
						>
							<img src={iconCoach} alt="" />
							<p>
								Hãy đăng ký tài khoản để có thể sử dụng tất cả
								các tính năng của chúng tôi
							</p>
							<button
								className={styles["hidden"]}
								id="sign-up"
								onClick={toggle}
							>
								Đăng ký
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
