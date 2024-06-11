import styles from "./header.module.css"
import { NavLink } from 'react-router-dom'
import person from '../../asserts/person.svg';
import logo from "../../asserts/logo_new.svg"
import { useSelector } from "react-redux";

export default function Header(props) {

    let {inforAuth}= useSelector(state=> state.AuthReducer)
    console.log("here", inforAuth)

    const linkClass = ({ isActive }) => {
        return `${styles["nav-link"]} ${isActive ? styles["active"] : ""}`
    }

    return (
        <div className={`${styles["header-home-page"]} relative mx-auto w-full bg-white text-[13px] block h-[220px]`}>
            <div className="flex m-auto w-[1128px] h-[80px]">
                
                <div className="mt-4 flex flex-1 items-start"></div>

                <div className="logo-banner z-10 mx-20">
                    <NavLink to="/">
                        <img alt="logo_banner" loading="lazy" style={{width: "295px", height: "60px", color: 'transparent'}} decoding="async" data-nimg={1} src={logo} />
                    </NavLink>
                </div>



                <div className="mt-4 flex flex-1 justify-end">
                    <div className={`flex items-start gap-4 text-center text-sm font-medium ${Object.keys(inforAuth).length === 0?"block":"hidden"}`}>
                        <NavLink to="/login"  className="flex h-8 w-44 justify-center text-[12px] cursor-pointer items-center gap-2 rounded-2xl bg-white p-2 text-black">
                            <img src={person} style={{width: "20px", height: "20px"}} alt=""/>
                            <span className={``}>Đăng nhập/Đăng ký</span>
                        </NavLink>
                    </div>

                    <div className={`flex items-start gap-4 text-center text-sm font-medium ${Object.keys(inforAuth).length !== 0?"block":"hidden"}`}>
                        <NavLink to="/edit"  className="flex h-8 w-44 justify-center text-[12px] cursor-pointer items-center gap-2 rounded-2xl bg-white p-2 text-black">
                            <img src={person} style={{width: "20px", height: "20px"}} alt=""/>
                            <span>{inforAuth.username}</span>
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className={`${styles["nav-link-group"]} content`}>
                <NavLink className={linkClass} to="/">TRANG CHỦ</NavLink>
                {/* <NavLink className={linkClass} to="/lich-trinh">LỊCH TRÌNH</NavLink> */}
                <NavLink className={linkClass} to="/tra-cuu-ve">TRA CỨU VÉ</NavLink>
                {/* <NavLink className={linkClass} to="/tin-tuc">TIN TỨC</NavLink> */}
                {/* <NavLink className={linkClass} to="/hoa-don">HOÁ ĐƠN</NavLink> */}
                <NavLink className={linkClass} to="/lien-he">LIÊN HỆ</NavLink>
                <NavLink className={linkClass} to="/ve-chung-toi">VỀ CHÚNG TÔI</NavLink>
            </div>
        </div>


    )
}
