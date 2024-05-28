import React from 'react'

export default function PriceDetails() {
    return (
        <div className="w-full rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px]">
            <div className="icon-orange flex gap-2 text-xl font-medium text-black">Chi tiết giá</div>
            <div className="mt-4 flex items-center justify-between"><span className="text-gray">Giá vé lượt đi</span><span
                className="text-orange">0đ</span></div>
            <div className="mt-1 flex items-center justify-between"><span className="text-gray">Giá vé lượt về</span><span
                className="text-orange">0đ</span></div>
            <div className="mt-1 flex items-center justify-between"><span className="text-gray">Phí thanh toán</span><span
                className="text-black">0đ</span></div>
            <div className="divide my-3"></div>
            <div className="flex items-center justify-between"><span className="text-gray">Tổng tiền</span><span
                className="text-orange">0đ</span></div>
        </div>
    )

}
