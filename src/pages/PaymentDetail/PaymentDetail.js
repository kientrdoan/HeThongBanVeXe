import React, { useEffect } from 'react'
import axios from "axios";
import { useSelector } from 'react-redux';

export default function PaymentDetail() {

    let {inforPayment, listIdVe}= useSelector(state=> state.BookTicketReducer)
    // let {selectSeat}= useSelector(state=> state.HomeReducer)

    const handlePaymentMethodChange = async (event) => {
        if (event.target.value === 'VNPAY') {
            try {
                const params = new URLSearchParams();
                params.append('amount', `${inforPayment.gia * inforPayment.selectSeat.length}`);
                params.append('orderInfo', `${listIdVe.join(" ")}`);

                const response = await axios.post('http://localhost:8080/thanhtoan/submitOrder', params);
                // Chuyển hướng người dùng sang URL được trả về từ server
                window.location.href = response.data;

            } catch (error) {
                console.error('There was an error submitting the order:', error);
            }
        }
    };

    useEffect(()=>{
        console.log(`${listIdVe.join(" ")}`)
    })

    return (
        <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
            <div className="w-1/2 p-4">
                {/*payment method*/}
                <div className=" flex-col 2lg:flex border border-[#DDE2E8] rounded-xl">
                    <div className="text-xl font-medium"> Chọn phương thức thanh toán</div>
                    <div className="ant-radio-group ant-radio-group-outline">
                        {/*Zalopay*/}
                        <label className="ant-radio-wrapper m-0 flex items-center border-b py-3">
                            <span className="ant-radio">
                                <input type="radio" className="ant-radio-input" name={"paymentMethod"} value={"ZALOPAY"} />
                                <span className="ant-radio-inner"></span>
                            </span>
                            <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg"
                                        alt="" />
                                    <div className="flex w-full flex-col">
                                        <div className="flex w-52 items-end justify-between">
                                            <span className="text-base text-black">ZaloPay</span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </label>

                        {/*vnpay*/}
                        <label className="ant-radio-wrapper m-0 flex items-center border-b py-3">
                            <span className="ant-radio">
                                <input type="radio" className="ant-radio-input" name={"paymentMethod"} value={"VNPAY"} onChange={handlePaymentMethodChange} />
                                <span className="ant-radio-inner"></span>
                            </span>
                            <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/vnpay_fdc107eeec/vnpay_fdc107eeec.svg"
                                        alt="" />
                                    <div className="flex w-full flex-col">
                                        <div className="flex w-52 items-end justify-between">
                                            <span className="text-base text-black">VNPay</span>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </label>
                    </div>
                </div>

                {/*price details*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                    <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá</div>
                    <div className="mt-4 flex items-center justify-between"><span
                        className="text-gray">Giá vé lượt đi</span><span
                            className="text-orange">{inforPayment.gia * inforPayment.listSeat.length}đ</span></div>
                    {/*<div className="mt-1 flex items-center justify-between"><span*/}
                    {/*    className="text-gray">Giá vé lượt về</span><span*/}
                    {/*    className="text-orange">0đ</span></div>*/}
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray">Phí thanh toán</span><span
                            className="text-black">0đ</span></div>
                    <div className="divide my-3"></div>
                    <div className="flex items-center justify-between"><span className="text-gray">Tổng tiền</span><span
                        className="text-orange">{inforPayment.gia * inforPayment.listSeat.length}đ</span></div>
                </div>
            </div>
            <div className="w-1/2 p-4">

                {/*Thông tin hàng khách*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"><p
                    className="text-xl font-medium text-black">Thông tin hành khách</p>
                    <div className="mt-4 flex items-center justify-between"><span
                        className="text-gray w-28">Họ và tên</span><span
                            className="text-black">{inforPayment.name}</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số điện thoại</span><span
                        className="text-black">{inforPayment.phone}</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-28">Email</span><span
                            className="text-black">{inforPayment.email}</span></div>
                </div>

                {/*Thông tin chuyến đi*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                    <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi
                    </p>
                    <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
                        className="text-right text-black">{inforPayment.tinhXuatPhat} - {inforPayment.tinhDen}</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
                        className="text-[#00613D]">{inforPayment.gioXuatPhat} {inforPayment.ngayXuatPhat}</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
                        className="text-black">{inforPayment.listSeat.length} Ghế</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">{inforPayment.listSeat.join(" ")}</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
                        className="text-[#00613D]">{inforPayment.gia * inforPayment.listSeat.length}</span></div>
                </div>

                {/*thông tin chuyến về nếu có khứ hồi*/}

            </div>
        </div>
    )
}


//compoment khu hoi
// <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
//     <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt về
//     </p>
//     <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
//         className="text-right text-black">Mien Dong - Buon Ma Thuot</span></div>
//     <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
//         className="text-[#00613D]">08:00 2024-05-01</span></div>
//     <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
//         className="text-black">1 Ghế</span></div>
//     <div className="mt-1 flex items-center justify-between"><span
//         className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">B05</span></div>
//     <div className="mt-1 flex items-center justify-between"><span
//         className="text-gray w-40">Điểm lên xe</span><span
//         className="text-right text-black">BX Miền Đông</span></div>
//     <div className="mt-1 flex items-center justify-between"><span className="text-gray w-32">Thời gian tới điểm lên xe</span><span
//         className="text-right text-red-500">Trước  07:45 01/05/2024</span></div>
//     <div className="mt-1 flex items-start justify-between"><span
//         className="text-gray w-40">Đón tận nơi</span><span
//         className="text-right text-black"></span></div>
//     <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
//         className="text-[#00613D]">265.000đ</span></div>
// </div>