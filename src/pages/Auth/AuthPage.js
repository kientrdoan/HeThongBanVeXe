import styles from "./style.module.css";
import iconCoach from "../../asserts/icon_coach.png";
import iconWorld from "../../asserts/icon_world.png";
import Axios from "axios";
import { NavLink } from "react-router-dom";

function AuthPage() {
	function toggle() {
		const container = document.getElementById("container");
		container.classList.toggle(styles["active"]);
	}

	function handleSignInForm(e) {
		e.preventDefault();
		const username = e.target.username.value;
		const password = e.target.password.value;
		// XỬ LÝ API ĐĂNG NHẬP.
		let promise =  Axios({
            url: "http://localhost:8080/auth/login",
            method: "GET",
            data: {
              username: username,
			  password: password,
            }
          })
		promise.then((result)=>{
			localStorage.setItem(username, result.data.data);
			console.log(result.data.data);
		})
		promise.catch((e)=>{
			console.log(e);
		})
	}

	function handleSignUpForm(e) {
		// const username = e.target.username.value;
		const password = e.target.password.value;
		const password2 = e.target.password2.value;

		if (password !== password2) {
			// THÔNG BÁO LỖI.
			return;
		}
		// XỬ LÝ API ĐĂNG KÝ.
	}

	return (
		<div className={styles["parent"]}>
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
