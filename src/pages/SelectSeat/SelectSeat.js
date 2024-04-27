import React, { useState } from 'react';
import seat_active from "../../asserts/seat_active.svg";
import seat_selecting from "../../asserts/seat_selecting.svg";
import seat_disabled from "../../asserts/seat_disabled.svg"

export default function Bill() {

    let seat_list = [{
        name: "A01",
        state: "disabled",
    }, {
        name: "A02",
        state: "disabled",
    }, {
        name: "A03",
        state: "disabled",
    }, {
        name: "A04",
        state: "disabled",
    }, {
        name: "A05",
        state: "disabled",
    }, {
        name: "A06",
        state: "disabled",
    }, {
        name: "A07",
        state: "disabled",
    }, {
        name: "A08",
        state: "active",
    }]

    let [state, setState]= useState({
        list_data: seat_list,
    })

    const handleSelecting= (index, new_state)=>{
        var new_data= state.list_data;
        // new_data[index].state= new_state
        
        if(new_data[index].state === "active"){
            new_data[index].state= "selecting"
        }else if(new_data[index].state === "selecting"){
            new_data[index].state= "active"
        }
        console.log(index, new_data[index].state)
        setState({
            list_data: new_data
        })
    }

    const render_seat = () => {
        var isLineTwo = 0;
        return seat_list.map((seat, index) => {
            if (index === 0) {
                return <tr className="flex items-center gap-1 justify-between">
                    <td onClick={()=>{handleSelecting(index, "selecting")}} className={`relative mt-1 flex justify-center text-center ${state.list_data[index].state==="disabled"? "cursor-not-allowed": "cursor-pointer"}`}>
                        {seat.state === "disabled" ? (
                            <img width={32} src={seat_disabled} alt="seat icon" />
                        ) : seat.state === "active" ? (
                            <img width={32} src={seat_active} alt="seat icon" />
                        ) : (
                            <img width={32} src={seat_selecting} alt="seat icon" />
                        )}
                        <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">{seat.name}</span>
                    </td>
                    <td className="relative w-6" />
                    <td className="relative w-6" />
                    <td className="relative w-6" />
                    <td onClick={()=>{handleSelecting(index + 1, "selecting")}} className={`relative mt-1 flex justify-center text-center ${state.list_data[index + 1].state==="disabled"? "cursor-not-allowed": "cursor-pointer"}`}>
                        {seat_list[index + 1].state === "disabled" ? (
                            <img width={32} src={seat_disabled} alt="seat icon" />
                        ) : seat_list[index + 1].state === "active" ? (
                            <img width={32} src={seat_active} alt="seat icon" />
                        ) : (
                            <img width={32} src={seat_selecting} alt="seat icon" />
                        )}
                        <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">{seat_list[index + 1].name}</span>
                    </td>
                </tr>

            } else if (index > 1 && index < seat_list.length - 2 && index + 2 < seat_list.length - 2) {
                if (isLineTwo > 0 && index + 2 < seat_list.length - 2) {
                    index += 2;
                }
                isLineTwo += 1;
                return <tr className="flex items-center gap-1 justify-between">
                    <td onClick={()=>{handleSelecting(index, "selecting")}} className={`relative mt-1 flex justify-center text-center ${state.list_data[index].state==="disabled"? "cursor-not-allowed": "cursor-pointer"}`}>
                        {seat_list[index].state === "disabled" ? (
                            <img width={32} src={seat_disabled} alt="seat icon" />
                        ) : seat_list[index].state === "active" ? (
                            <img width={32} src={seat_active} alt="seat icon" />
                        ) : (
                            <img width={32} src={seat_selecting} alt="seat icon" />
                        )}
                        <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">{seat_list[index].name}</span>
                    </td>
                    <td className="relative w-6" />
                    <td onClick={()=>{handleSelecting(index + 1, "selecting")}} className={`relative mt-1 flex justify-center text-center ${state.list_data[index + 1].state==="disabled"? "cursor-not-allowed": "cursor-pointer"}`}>
                        {seat_list[index + 1].state === "disabled" ? (
                            <img width={32} src={seat_disabled} alt="seat icon" />
                        ) : seat_list[index + 1].state === "active" ? (
                            <img width={32} src={seat_active} alt="seat icon" />
                        ) : (
                            <img width={32} src={seat_selecting} alt="seat icon" />
                        )}
                        <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">{seat_list[index + 1].name}</span>
                    </td>
                    <td className="relative w-6" />
                    <td onClick={()=>{handleSelecting(index + 2, "selecting")}} className={`relative mt-1 flex justify-center text-center ${state.list_data[index + 2].state==="disabled"? "cursor-not-allowed": "cursor-pointer"}`}>
                        {state.list_data[index + 2].state === "disabled" ? (
                            <img width={32} src={seat_disabled} alt="seat icon" />
                        ) : state.list_data[index + 2].state === "active" ? (
                            <img width={32} src={seat_active} alt="seat icon" />
                        ) : (
                            <img width={32} src={seat_selecting} alt="seat icon" />
                        )}
                        <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">{seat_list[index + 2].name}</span>
                    </td>
                </tr>
            }
        })
    }



    return (
        <div className=''>
            <div className='max-w-md mx-auto'>
                <div className="mx-auto flex max-w-2xl flex-col px-3 py-1">
                    {/* Trang Thai */}
                    <div className="flex justify-between text-[13px] font-normal">
                        <span className="mr-8 flex items-center">
                            <div className="mr-2 h-4 w-4 rounded bg-[#D5D9DD] border-[#C0C6CC]" />
                            Đã bán
                        </span>
                        <span className="mr-8 flex items-center">
                            <div className="mr-2 h-4 w-4 rounded bg-[#DEF3FF] border-[#96C5E7]" />
                            Còn trống
                        </span>
                        <span className="flex items-center">
                            <div className="mr-2 h-4 w-4 rounded bg-[#FDEDE8] border-[#F8BEAB]" />
                            Đang chọn
                        </span>
                    </div>

                    {/* Thong Tin Tang Ghe */}
                    <div className="my-4 flex flex-row px-[8px] gap-[16px] text-center font-medium justify-center">
                        <div className="flex min-w-[50%] flex-col">
                            <div className="icon-gray flex w-full justify-center p-2 text-sm">
                                <span>Tầng dưới</span>
                            </div>
                            <div className="divide mb-4" />
                            {/* Table Hang Ghe */}
                            <table>
                                <tbody>

                                    {render_seat()}
                                </tbody>
                            </table>


                        </div>

                        <div className="flex min-w-[50%] flex-col">
                            <div className="icon-gray flex w-full justify-center p-2 text-sm">
                                <span>Tầng trên</span>
                            </div>
                            <div className="divide mb-4 2lg:hidden" />
                            <table>
                                <tbody>
                                    <tr className="flex items-center gap-1 justify-between">
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A01</span>
                                        </td>
                                        <td className="relative w-6" />
                                        <td className="relative w-6" />
                                        <td className="relative w-6" />
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A02</span>
                                        </td>
                                    </tr>
                                    <tr className="flex items-center gap-1 justify-between">
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A03</span>
                                        </td>
                                        <td className="relative w-6" />
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A04</span>
                                        </td>
                                        <td className="relative w-6" />
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A05</span>
                                        </td>
                                    </tr>
                                    <tr className="flex items-center gap-1 justify-between">
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A03</span>
                                        </td>
                                        <td className="relative w-6" />
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A04</span>
                                        </td>
                                        <td className="relative w-6" />
                                        <td className="relative mt-1 flex justify-center text-center cursor-not-allowed">
                                            <img width={32} src={seat_disabled} alt="seat icon" />
                                            <span className="absolute text-sm font-semibold text-[#A2ABB3] top-1">A05</span>
                                        </td>
                                    </tr>
                                    {/* Các hàng khác tương tự */}
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}
