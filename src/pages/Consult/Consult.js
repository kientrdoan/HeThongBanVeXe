import styles from "./style.module.css";
import React, { useState } from 'react'
import Axios from "axios"
import Datepicker from "react-tailwindcss-datepicker";

export default function Consult() {
	var today = new Date();

	let [openDatePicker] = useState({
		show: false,
	})

	let [getInforTicket, setInforTicket] = useState({
		name: "",
		phone: "",
		email: "",
		tinhXuatPhat: "",
		tinhDen: "",
		ngayKhoiHanh: "",
		gioXuatPhat: "",
	})

	let [isRenderData, setRenderData] = useState(0)

	let [inforInput, setInforInput] = useState({
		phone: "",
		ticket: "",
		date: "",
	})

	const [value, setValue] = useState({
		startDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
		endDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
	});

	function formatDate(inputDate) {
		// Tách chuỗi dựa trên dấu '-'
		const [year, month, day] = inputDate.split('-');
	
		// Đảm bảo tháng và ngày có hai chữ số
		const formattedMonth = month.padStart(2, '0');
		const formattedDay = day.padStart(2, '0');
	
		return `${year}-${formattedMonth}-${formattedDay}`;
	  }
	//  Handle Xu ly chon ngay
	const handleValueChange = (newValue) => {
		// console.log("newValue:", newValue);
		if (newValue.startDate !== null && newValue.endDate !== null) {
			setValue(newValue);
		} else {
			newValue = {
				startDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
				endDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
			}
			setValue(newValue)
		}

	}

	const rederDatePicker = () => {
		if (openDatePicker.show === false) {
			return <Datepicker
				useRange={false}
				asSingle={true}
				value={value}
				displayFormat={"DD-MM-YYYY"}
				minDate={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()}
				maxDate={today.getFullYear() + "-" + (today.getMonth() + 2) + "-" + today.getDate()}
				startFrom={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()}
				onChange={handleValueChange} />
		}
	}

	const handleSearchInforTicket = async (e) => {
		try {
			const result = await Axios({
				url: "http://localhost:8080/vexe/tra-cuu-ve",
				method: "GET",
				params: {
					phone: inforInput.phone,
					maGhe: inforInput.ticket,
					ngayDat: formatDate(value.startDate),
				},
			});
			if (result.data.data !== null) {
				setInforTicket(result.data.data)
				setRenderData(1)
				console.log(result.data.data)
			} else if(inforInput.phone !== "" && inforInput.ticket !== "" &&  result.data.data ===null){
				setRenderData(2)
			}
		} catch (err) {
			console.error(err);
			throw err; // Rethrow the error for the calling function to handle
		}
	}

	const handleChangeInput = (e) => {
		let { name, value } = e.target;
		let newInforTicket = { ...inforInput, [name]: value };
		setInforInput(newInforTicket)
	}



	return (
		<div className={`${styles["parent"]} flex flex-col`}>
			<form onSubmit={(e) => { e.preventDefault() }}>
				<h2>TRA CỨU THÔNG TIN ĐẶT VÉ</h2>
				<input
					type="tel"
					name="phone"
					required
					placeholder="Vui lòng nhập số điện thoại"
					onChange={(e) => { handleChangeInput(e) }}
					value={inforInput.name}
				/>
				<input
					type="text"
					name="ticket"
					required
					placeholder="Vui lòng nhập mã vé"
					onChange={(e) => { handleChangeInput(e) }}
					value={inforInput.ticket}
				/>

				{rederDatePicker()}
				<button className={`${styles["button-submit"]}`} type="submit" onClick={(e) => { handleSearchInforTicket(e) }}>TRA CỨU</button>
			</form>

			<div className={`${isRenderData === 1 ? "block" : "hidden"} w-[500px] mt-[20px] mx-auto rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]`}>
				<p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi</p>
				<div className="mt-4 flex justify-between">
					<span className="text-gray w-20">Tuyến xe</span>
					<span className="text-right text-black">{getInforTicket.tinhXuatPhat} - {getInforTicket.tinhDen} </span>
				</div>
				<div className="mt-1 flex items-center justify-between">
					<span className="text-gray w-30">Thời gian xuất bến</span>
					<span className="text-[#00613D]">{getInforTicket.gioXuatPhat} - {getInforTicket.ngayKhoiHanh} </span>
				</div>
				<div className="mt-1 flex items-center justify-between">
					<span className="text-gray w-28">Họ và tên</span>
					<span className="text-black"> {getInforTicket.name} </span>
				</div>
				<div className="mt-1 flex items-center justify-between">
					<span className="text-gray w-28">Số điện thoại</span>
					<span className="text-[#00613D]">{getInforTicket.phone}</span>
				</div>
				<div className="mt-1 flex items-center justify-between">
					<span className="text-gray">email</span>
					<span className="text-[#00613D]">{getInforTicket.email}</span>
				</div>
			</div>

			<div className={`${isRenderData === 2 ? "block" : "hidden"} w-[500px] mt-[20px] mx-auto rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]`}>
				<p className="icon-orange flex gap-4 text-xl font-medium text-black">Khong co thong tin ve</p>

			</div>
		</div>
	)
}

