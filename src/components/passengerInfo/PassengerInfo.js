import React from 'react'

export default function PassengerInfo() {
    return (
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
    )
}
