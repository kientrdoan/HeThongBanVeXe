import React from 'react'
import styles from "../footer/footer.module.css";

export default function DepartureInfo() {
    return (
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

    )
}
