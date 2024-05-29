import React from 'react'
import DepartureInfo from '../../components/departureInfo/DepartureInfo'
import ReturnInfo from '../../components/returnInfo/ReturnInfo'
import PassengerInfo from '../../components/passengerInfo/PassengerInfo'
import PaymentMethod from '../../components/paymentMethod/PaymentMethod'
// import SelectSeat from "../SelectSeat/SelectSeat"
import styles from "./PaymentDetail.module.css"
import PriceDetails from "../../components/priceDetails/PriceDetails";
// import {NavLink} from 'react-router-dom';

export default function paymentDetail() {


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
                                <input type="radio" className="ant-radio-input" value="8"/>
                                <span className="ant-radio-inner"></span>
                            </span>
                            <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                         src="https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg"
                                         alt=""/>
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
                                <input type="radio" className="ant-radio-input" value="8"/>
                                <span className="ant-radio-inner"></span>
                            </span>
                            <span>
                                <div className="flex w-full items-center">
                                    <img className="ml-4 mr-4 w-[40px]"
                                         src="https://storage.googleapis.com/futa-busline-web-cms-prod/vnpay_fdc107eeec/vnpay_fdc107eeec.svg"
                                         alt=""/>
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
                        className="text-orange">0đ</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray">Giá vé lượt về</span><span
                        className="text-orange">0đ</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray">Phí thanh toán</span><span
                        className="text-black">0đ</span></div>
                    <div className="divide my-3"></div>
                    <div className="flex items-center justify-between"><span className="text-gray">Tổng tiền</span><span
                        className="text-orange">0đ</span></div>
                </div>
            </div>
            <div className="w-1/2 p-4">

                {/*Thông tin hàng khách*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"><p
                    className="text-xl font-medium text-black">Thông tin hành khách</p>
                    <div className="mt-4 flex items-center justify-between"><span
                        className="text-gray w-28">Họ và tên</span><span
                        className="text-black">Nguyen Nam Viet</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số điện thoại</span><span
                        className="text-black">0866666666</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-28">Email</span><span
                        className="text-black">abc12002@gmail.com</span></div>
                </div>

                {/*Thông tin chuyến đi*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                    <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi
                    </p>
                    <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
                        className="text-right text-black">Mien Dong - Buon Ma Thuot</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
                        className="text-[#00613D]">08:00 2024-05-01</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
                        className="text-black">1 Ghế</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">B05</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-40">Điểm lên xe</span><span
                        className="text-right text-black">BX Miền Đông</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-32">Thời gian tới điểm lên xe</span><span
                        className="text-right text-red-500">Trước  07:45 01/05/2024</span></div>
                    <div className="mt-1 flex items-start justify-between"><span
                        className="text-gray w-40">Đón tận nơi</span><span
                        className="text-right text-black"></span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
                        className="text-[#00613D]">265.000đ</span></div>
                </div>

                {/*thông tin chuyến về nếu có khứ hồi*/}
                <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                    <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt về
                    </p>
                    <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
                        className="text-right text-black">Mien Dong - Buon Ma Thuot</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
                        className="text-[#00613D]">08:00 2024-05-01</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
                        className="text-black">1 Ghế</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">B05</span></div>
                    <div className="mt-1 flex items-center justify-between"><span
                        className="text-gray w-40">Điểm lên xe</span><span
                        className="text-right text-black">BX Miền Đông</span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray w-32">Thời gian tới điểm lên xe</span><span
                        className="text-right text-red-500">Trước  07:45 01/05/2024</span></div>
                    <div className="mt-1 flex items-start justify-between"><span
                        className="text-gray w-40">Đón tận nơi</span><span
                        className="text-right text-black"></span></div>
                    <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
                        className="text-[#00613D]">265.000đ</span></div>
                </div>

            </div>
        </div>

    )
    // return (
    //     <div className="flex flex-wrap justify-center max-w-4xl mx-auto">
    //         <div className="w-1/2 p-4">
    //             <PaymentMethod></PaymentMethod>
    //             <PriceDetails></PriceDetails>
    //         </div>
    //         <div className="w-1/2 p-4">
    //             <PassengerInfo></PassengerInfo>
    //             <DepartureInfo></DepartureInfo>
    //             <ReturnInfo></ReturnInfo>
    //
    //         </div>
    //     </div>
    // )
    /*    return (
            <div style={{backgroundColor: "#f3f3f5"}}>
                <div className="w-[320px] hidden flex-col 2lg:flex">
                    <div className="text-xl font-medium"> Chọn phương thức thanh toán</div>
                    <div className="ant-radio-group ant-radio-group-outline"><label
                        className="ant-radio-wrapper ant-radio-wrapper-checked m-0 flex items-center border-b py-3"
                        ><span className="ant-radio ant-radio-checked"><input type="radio"
                                                                                                   className="ant-radio-input"
                                                                                                   value="18"
                                                                                                   checked=""/><span
                        className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/futapay_db8da73dc3/futapay_db8da73dc3.svg"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span
                        className="text-base text-black">FUTAPay</span></div><span
                        className="whitespace-pre-wrap text-xs font-medium text-orange"></span></div></div></span></label><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="7"/><span
                        className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span
                        className="text-base text-black">ZaloPay</span></div><span
                        className="whitespace-pre-wrap text-xs font-medium text-orange">Nhập mã GIAMSAU - giảm 50% tối đa 40k cho bạn mới, nhập ZLPFUTA10 giảm 10k cho đơn từ 300k</span></div></div></span></label><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="11"/><span
                        className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/Logo_Shopee_Pay_2024_1fb07ef622/Logo_Shopee_Pay_2024_1fb07ef622.png"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span
                        className="text-base text-black">ShopeePay</span></div><span
                        className="whitespace-pre-wrap text-xs font-medium text-orange">Nhập mã SPPFUTA05 - giảm 15k với đơn từ 100k cho Bạn Mới, nhập SPPVEXE05 giảm 10k cho đơn từ 100k</span></div></div></span></label><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="6"/><span
                        className="ant-radio-inner"></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/momo_bb732ac6f7/momo_bb732ac6f7.svg"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span
                        className="text-base text-black">MoMo</span></div><span
                        className="whitespace-pre-wrap text-xs font-medium text-orange"></span></div></div></span></span></label><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="8"/><span
                        className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/vnpay_fdc107eeec/vnpay_fdc107eeec.svg"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span className="text-base text-black">VNPay</span></div><span
                        className="whitespace-pre-wrap text-xs font-medium text-orange">Nhập mã VNPAYFUTAT45 giảm 5K đơn từ 200K, giảm 15K đơn từ 550K, giảm 45K đơn từ 1100K</span></div></div></span></label>
                    </div>
                    <div className="ant-radio-group ant-radio-group-outline mt-3 border-t pt-3"><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="5"/><span
                        className="ant-radio-inner"></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/atn_logo_fd4ba999a5/atn_logo_fd4ba999a5.png"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span className="text-base text-black">Thẻ ATM nội địa</span></div></div></div></span></span></label><label
                        className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                        className="ant-radio"><input type="radio" className="ant-radio-input" value="3"/><span
                        className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                        className="ml-4 mr-4 w-[40px]"
                        src="https://storage.googleapis.com/futa-busline-web-cms-prod/visa_logo_3d2a20b162/visa_logo_3d2a20b162.png"
                        alt=""/><div className="flex w-full flex-col"><div
                        className="flex w-52 items-end justify-between"><span className="text-base text-black">Thẻ Visa/Master/JCB</span></div></div></div></span></label>
                    </div>
                </div>
                <div className="w-[360px] flex">
                    <div className="mx-auto flex min-w-[345px] flex-col gap-6">
                        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]"><p
                            className="text-xl font-medium text-black">Thông tin hành khách</p>
                            <div className="mt-4 flex items-center justify-between"><span
                                className="text-gray w-28">Họ và tên</span><span
                                className="text-black">Nguyen Nam Viet</span></div>
                            <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số điện thoại</span><span
                                className="text-black">0866666666</span></div>
                            <div className="mt-1 flex items-center justify-between"><span
                                className="text-gray w-28">Email</span><span
                                className="text-black">abc12002@gmail.com</span></div>
                        </div>
                        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                            <p className="icon-orange flex gap-4 text-xl font-medium text-black">Thông tin lượt đi
                                <img className="w-6 cursor-pointer text-orange" src="/images/icons/info_white.svg" alt="open filter"/>
                            </p>
                            <div className="mt-4 flex justify-between"><span className="text-gray w-20">Tuyến xe</span><span
                                className="text-right text-black">Mien Dong - Buon Ma Thuot</span></div>
                            <div className="mt-1 flex items-center justify-between"><span className="text-gray w-30">Thời gian xuất bến</span><span
                                className="text-[#00613D]">08:00 2024-05-01</span></div>
                            <div className="mt-1 flex items-center justify-between"><span className="text-gray w-28">Số lượng ghế</span><span
                                className="text-black">1 Ghế</span></div>
                            <div className="mt-1 flex items-center justify-between"><span
                                className="text-gray w-28">Số ghế</span><span className="text-[#00613D]">B05</span></div>
                            <div className="mt-1 flex items-center justify-between"><span
                                className="text-gray w-40">Điểm lên xe</span><span
                                className="text-right text-black">BX Miền Đông</span></div>
                            <div className="mt-1 flex items-center justify-between"><span className="text-gray w-32">Thời gian tới điểm lên xe</span><span
                                className="text-right text-red-500">Trước  07:45 01/05/2024</span></div>
                            <div className="mt-1 flex items-start justify-between"><span
                                className="text-gray w-40">Đón tận nơi</span><span
                                className="text-right text-black"></span></div>
                            <div className="mt-1 flex items-center justify-between"><span className="text-gray">Tổng tiền lượt đi</span><span
                                className="text-[#00613D]">265.000đ</span></div>
                        </div>
                        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
                            <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá <img
                                className="w-6 cursor-pointer text-orange" src="/images/icons/info_white.svg"
                                alt="open filter"/></div>
                            <div className="mt-4 flex items-center justify-between"><span
                                className="text-gray">Giá vé lượt đi</span><span
                                className="text-orange">265.000đ</span></div>
                            <div className="mt-1 flex items-center justify-between"><span
                                className="text-gray">Phí thanh toán</span><span
                                className="text-black">0đ</span></div>
                            <div className="divide my-3"></div>
                            <div className="flex items-center justify-between"><span
                                className="text-gray">Tổng tiền</span><span className="text-orange">265.000đ</span></div>
                        </div>
                    </div>
                </div>
            </div>
    )*/
}