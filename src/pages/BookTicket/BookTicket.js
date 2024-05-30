import React, {useState } from 'react'
import SelectSeat from "../SelectSeat/SelectSeat"
import styles from "./BookTicket.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getListVeDaDatByIdChuyenXe, postBookTicket } from '../../redux/actions/BookTicketAction';

export default function BookTicket() {

    const { id } = useParams();
    let dispatch= useDispatch()

    // useEffect(()=>{
    //     listGheDaDat= getListVeDaDatByIdChuyenXe(id)
    //     console.log(listGheDaDat.listMaGheDaDat)
    //     // dispatch({
    //     //     type: "UPDATE_GHE_DA_DAT",
    //     //     listMaGhe: listGheDaDat.listMaGheDaDat
    //     // })
    // })

    let {chuyenXe, selectSeat}= useSelector(state=> state.HomeReducer)
    // let {listGheDaDat}= useSelector(state=> state.BookTicketReducer)

    let [inforCustomer, setInforCustomer]= useState({
        name: "",
        mobile: "",
        email: "",
    })

    const handleOnFocus = (idWrapCust) => {
        var wrap = document.getElementById(idWrapCust);
        wrap.classList.add(`${styles["ant-input-wrapper-focused"]}`);
    }

    const handleOnBlur = (idWrapCust) => {
        var wrap = document.getElementById(idWrapCust);
        wrap.classList.remove(`${styles["ant-input-wrapper-focused"]}`);
    }

    const handleInputInforCustomer= (e)=>{
        let {name, value} = e.target;
        // console.log(name, value)
        let newInforCustomer = {...inforCustomer, [name]: value}

        setInforCustomer(newInforCustomer);
        // console.log(id)
    }

    const handleBookTicket= async ()=>{
        const today = new Date();
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        let inforTicket= {
            ngayDat: today.toLocaleDateString("en-CA", options),
            trangThaiThanhToan: 0,
            listSeat: selectSeat,
            idKhachHang: -1,
            idChuyenXe: id,
            idQuanLy: -1,
            name: inforCustomer.name,
            phone: inforCustomer.mobile,
            email: inforCustomer.email,    
        }
        await dispatch(postBookTicket(inforTicket))
        
         // Thêm một độ trễ nhỏ để đảm bảo cơ sở dữ liệu có đủ thời gian cập nhật
        await new Promise(resolve => setTimeout(resolve, 1000)); // Đợi 500ms

        let listGheDaDat= await getListVeDaDatByIdChuyenXe(id)
        console.log(listGheDaDat.listMaGheDaDat)
        dispatch({
            type: "UPDATE_GHE_DA_DAT",
            listMaGhe: listGheDaDat.listMaGheDaDat
        })

        // dispatch({
        //     type: "CHANGE_SELECT_SEAT",
        //     selectSeat: []
        // })

        let inforPayment= {
            name: inforCustomer.name,
            phone: inforCustomer.mobile,
            email: inforCustomer.email,
            tinhXuatPhat: chuyenXe.tinhXuatPhat,
            tinhDen: chuyenXe.tinhDen,
            ngayXuatPhat: chuyenXe.ngayXuatPhat,
            gioXuatPhat: chuyenXe.gioXuatPhat,
            gia: chuyenXe.gia,
        }

        dispatch({
            type: "HANDLE_INFOR_PAYMENT",
            inforPayment: inforPayment
        })
    }

    return (
        <div style={{ backgroundColor: "#f3f3f5" }}>
            <div className='pb-2 ml-[200px] mr-[200px] pt-2'>
                <div className='flex gap-4'>
                    {/* Left*/}
                    <div className='flex-1'>
                        {/* Hàng Ghế */}
                        <div className='bg-white rounded-t-xl border'>
                            <SelectSeat></SelectSeat>
                        </div>

                        <div className="divide py-[2px]"></div>

                        {/* Thông Tin Cá Nhân */}
                        <div className="flex w-full flex-row gap-6 px-6 py-4 text-[15px] bg-white">
                            <div className="flex flex-1 flex-col">
                                <p className="text-xl font-medium text-black mb-4">Thông tin khách hàng</p>

                                <label for="CustName" className="ant-form-item-required ant-form-item-required-mark-optional" title="">
                                    <div className="flex">Họ và tên
                                        <span className="ml-1 text-base text-[#E12424]">*</span>
                                    </div>
                                </label>
                                <span id="WrapCustName" className={`${styles["input-form"]} mb-4`}>
                                    <input onChange={(e)=>{handleInputInforCustomer(e)}} onFocus={() => { handleOnFocus("WrapCustName") }} onBlur={() => { handleOnBlur("WrapCustName") }}
                                        className={`${styles["ant-input"]}`} type="text" name="name" id="CustName" value={inforCustomer.name}/>
                                </span>

                                <label for="CustMobile" className="ant-form-item-required ant-form-item-required-mark-optional" title="">
                                    <div className="flex">Số điện thoại
                                        <span className="ml-1 text-base text-[#E12424]">*</span>
                                    </div>
                                </label>
                                <span id="WrapCustMobile" className={`${styles["input-form"]} mb-4`}>
                                    <input onChange={(e)=>{handleInputInforCustomer(e)}} onFocus={() => { handleOnFocus("WrapCustMobile") }} onBlur={() => { handleOnBlur("WrapCustMobile") }}
                                        className={`${styles["ant-input"]}`} type="text" name="mobile" id="CustMobile" value={inforCustomer.mobile}/>
                                </span>

                                <label for="CustEmail" className="ant-form-item-required ant-form-item-required-mark-optional" title="">
                                    <div className="flex">Email
                                        <span className="ml-1 text-base text-[#E12424]">*</span>
                                    </div>
                                </label>
                                <span id="WrapCustEmail" className={`${styles["input-form"]} mb-4`}>
                                    <input onChange={(e)=>{handleInputInforCustomer(e)}} onFocus={() => { handleOnFocus("WrapCustEmail") }} onBlur={() => { handleOnBlur("WrapCustEmail") }}
                                        className={`${styles["ant-input"]}`} type="text" name="email" id="CustEmail" value={inforCustomer.email}/>
                                </span>

                            </div>
                            <div className="content-editor flex h-full flex-1 flex-col text-justify text-sm">
                                <p className="mb-6 text-center text-base font-medium text-orange">ĐIỀU KHOẢN &amp; LƯU Ý</p>
                                <div>
                                    <p>
                                        (*) <span style={{ color: 'rgb(0, 0, 0)' }}>
                                                Quý khách vui lòng có mặt tại bến xuất phát của xe trước ít nhất 30 phút giờ xe khởi hành, 
                                                mang theo thông báo đã thanh toán vé thành công có chứa mã vé được gửi từ hệ thống. 
                                            </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="divide py-[2px]"></div>

                        {/* Thông Tin Điểm Đón Trả */}
                        <div className="flex w-full bg-white">
                            <div className="flex w-full flex-col p-4 text-[15px] md:p-6">
                                <div className="icon-orange flex gap-4 text-xl font-medium text-black">
                                    Thông tin đón trả
                                </div>
                                <div className="mt-6 flex gap-6">
                                    {/* Điểm Đón */}
                                    <div className="flex flex-1 flex-col gap-4">
                                        <span className="text-base font-medium uppercase">Điểm đón</span>
                                        <div className="relative flex justify-between">
                                            <div className={`${styles["ant-radio-group"]} ${styles["ant-radio-group-outline"]}`}>
                                                <label className={`${styles["ant-radio-wrapper"]} ${styles["ant-radio-wrapper-checked"]}`}>
                                                    <span className={`${styles["ant-radio"]} ${styles["ant-radio-checked"]}`}>
                                                        <input type="radio" className={`${styles["ant-radio-input"]}`} value="0" />
                                                    </span>
                                                    <span className={styles["ant-radio-inner"]}></span>
                                                    Điểm đón
                                                </label>
                                            </div>
                                        </div>

                                        <div className="flex w-full cursor-pointer items-center justify-between border border-gray-300 text-sm p-2">
                                            <span>BX {chuyenXe.tinhXuatPhat}</span>
                                            <div className="icon-gray">
                                            </div>
                                        </div>

                                        {/* Thông Báo */}
                                        <div className="flex flex-wrap gap-1">
                                            <span>Quý khách vui lòng có mặt tại Bến xe/Văn Phòng</span>
                                            <span className="font-semibold">BX {chuyenXe.tinhXuatPhat}</span>
                                            <span className="font-semibold text-red-500">Trước {chuyenXe.gioXuatPhat} {chuyenXe.ngayXuatPhat}</span>
                                            <span>để được trung chuyển hoặc kiểm tra thông tin trước khi lên xe.</span>
                                        </div>
                                    </div>

                                    <div className="h-full w-[1px] border-r"></div>
                                    {/* Điểm Trả */}
                                    <div className="flex flex-1 flex-col gap-4">
                                        {/* Header Điểm trả */}
                                        <span className="text-base font-medium uppercase">Điểm trả</span>
                                        <div className="relative flex justify-between">
                                            <div className="ant-radio-group ant-radio-group-outline">

                                                <label className={`${styles["ant-radio-wrapper"]} ${styles["ant-radio-wrapper-checked"]}`}>
                                                    <span className={`${styles["ant-radio"]} ${styles["ant-radio-checked"]}`}>
                                                        <input type="radio" name='local' className={`${styles["ant-radio-input"]}`} value="0" />
                                                    </span>
                                                    <span className={styles["ant-radio-inner"]}></span>
                                                    Điểm trả
                                                </label>

                                                {/* <label className={`${styles["ant-radio-wrapper"]}`}>
                                                    <span className={`${styles["ant-radio"]}`}>
                                                        <input type="radio" name='local' className={`${styles["ant-radio-input"]}`} value="1" />
                                                    </span>
                                                    <span className={styles["ant-radio-inner"]}></span>
                                                    Trung chuyển
                                                </label> */}
                                            </div>
                                        </div>
                                        <div className="flex w-full cursor-pointer items-center justify-between border p-2 text-[15px]">
                                            <span>BX {chuyenXe.tinhDen}</span>
                                            <div className="flex items-center justify-center">                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="divide py-[2px]"></div>
                        {/* Thanh Toán */}
                        <div className="flex items-center p-6 bg-white rounded-b-xl border">
                            <div className="flex flex-col">
                                <span className="w-16 rounded-xl bg-[#00613D] py-1 text-center text-xs text-white">PAYMENT</span>
                                <span className="mt-2 text-2xl font-medium text-black">{selectSeat.length * chuyenXe.gia}đ</span>
                            </div>
                            <div className="flex flex-auto items-center justify-end">
                                <button type="button" className="bg-gray-200 text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full py-2 px-4 mr-6 w-28 transition ease-in duration-150">
                                    <span>Cancel</span>
                                </button>
                                <NavLink onClick={()=>{handleBookTicket()}} to="/payment" type="button" className="bg-blue-500 hover:bg-blue-600 text-white active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded-full px-4 py-2 w-28 transition duration-150 ease-in-out">
                                    <span>Payment</span>
                                </NavLink>

                            </div>
                        </div>
                    </div>

                    {/* Thong Tin Tuyến - Right*/}
                    <div className="mx-auto flex min-w-[345px] flex-col gap-6">
                        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                            <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi</p>
                            <div className="mt-4 flex justify-between">
                                <span className="text-gray w-20">Tuyến xe</span>
                                <span className="text-right text-black">{chuyenXe.tinhXuatPhat} ⇒ {chuyenXe.tinhDen}</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-gray w-30">Thời gian xuất bến</span>
                                <span className="text-[#00613D]">{chuyenXe.gioXuatPhat} {chuyenXe.ngayXuatPhat}</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-gray w-28">Số lượng ghế</span>
                                <span className="text-black">{selectSeat.length} Ghế</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-gray w-28">Số ghế</span>
                                <span className="text-[#00613D]">{selectSeat.join(" ")}</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-gray">Tổng tiền lượt đi</span>
                                <span className="text-[#00613D]">{selectSeat.length * chuyenXe.gia}đ</span>
                            </div>
                        </div>
                        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                            {/* <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá
                        <img className="w-6 cursor-pointer text-orange" src="/images/icons/info_white.svg" alt="open filter" />
                    </div> */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-gray">Giá vé lượt đi</span>
                                <span className="text-orange">{selectSeat.length * chuyenXe.gia}đ</span>
                            </div>
                            <div className="mt-1 flex items-center justify-between">
                                <span className="text-gray">Phí thanh toán</span>
                                <span className="text-black">0đ</span>
                            </div>
                            <div className="divide my-3"></div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray">Tổng tiền</span>
                                <span className="text-orange">{selectSeat.length * chuyenXe.gia}đ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
