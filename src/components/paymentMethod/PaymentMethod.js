import React from 'react'

export default function paymentMethod() {
    return (
        <div className=" flex-col 2lg:flex border border-[#DDE2E8] rounded-xl">
            <div className="text-xl font-medium"> Chọn phương thức thanh toán</div>
            <div className="ant-radio-group ant-radio-group-outline"><label
                className="ant-radio-wrapper ant-radio-wrapper-checked m-0 flex items-center border-b py-3"
                ><span className="ant-radio ant-radio-checked"><input type="radio"
                                                                                           className="ant-radio-input"
                                                                                           value="7"
                                                                                           data-sider-select-id="6e2f142a-12d9-49af-917c-2bd8c4d40f45"/><span
                className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                className="ml-4 mr-4 w-[40px]"
                src="https://storage.googleapis.com/futa-busline-web-cms-prod/zalo_a38c879763/zalo_a38c879763.svg"
                alt=""/><div className="flex w-full flex-col"><div className="flex w-52 items-end justify-between"><span
                className="text-base text-black">ZaloPay</span></div><span
                className="whitespace-pre-wrap text-xs font-medium text-orange">Nhập mã GIAMSAU - giảm 50% tối đa 40k cho bạn mới, nhập ZLPFUTA10 giảm 10k cho đơn từ 300k</span></div></div></span></label><label
                className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                className="ant-radio"><input type="radio" className="ant-radio-input" value="6"/><span
                className="ant-radio-inner"></span><span><div className="flex w-full items-center"><img
                className="ml-4 mr-4 w-[40px]"
                src="https://storage.googleapis.com/futa-busline-web-cms-prod/momo_bb732ac6f7/momo_bb732ac6f7.svg"
                alt=""/><div className="flex w-full flex-col"><div className="flex w-52 items-end justify-between"><span
                className="text-base text-black">MoMo</span></div><span
                className="whitespace-pre-wrap text-xs font-medium text-orange"></span></div></div></span></span></label><label
                className="ant-radio-wrapper m-0 flex items-center border-b py-3" ><span
                className="ant-radio"><input type="radio" className="ant-radio-input" value="8"/><span
                className="ant-radio-inner"></span></span><span><div className="flex w-full items-center"><img
                className="ml-4 mr-4 w-[40px]"
                src="https://storage.googleapis.com/futa-busline-web-cms-prod/vnpay_fdc107eeec/vnpay_fdc107eeec.svg"
                alt=""/><div className="flex w-full flex-col"><div className="flex w-52 items-end justify-between"><span
                className="text-base text-black">VNPay</span></div><span
                className="whitespace-pre-wrap text-xs font-medium text-orange">Nhập mã VNPAYFUTAT45 giảm 5K đơn từ 200K, giảm 15K đơn từ 550K, giảm 45K đơn từ 1100K</span></div></div></span></label>
            </div>
        </div>
    )
}