import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./home.module.css"
import { NavLink } from 'react-router-dom'
import switch_location from '../../asserts/switch_location.svg'
import ModalAdress from '../../modal/ModalAdress/ModalAdress';
import Datepicker from "react-tailwindcss-datepicker";
import arrow_down_select from '../../asserts/arrow_down_select.svg';
import circle_checkbox_checked from '../../asserts/circle_checkbox_checked.svg';
import pickup from "../../asserts/pickup.svg";
import station from "../../asserts/station.svg";
import delete_filter from "../../asserts/delete.svg"
import Bill from '../Bill/Bill'



export default function Home() {

  var today = new Date();

  const [selectedOption, setSelectedOption] = useState(false);

  let [openDatePicker] = useState({
    show: false,
  })

  let [numberTicket, setNumberTicket]= useState(1)

  let { origin, destination } = useSelector(state => state.ModalReducer);
  let dispatch = useDispatch()

  const handleRadioClick = (value) => {
    setSelectedOption(value); // Cập nhật giá trị được chọn
  };


  const [value, setValue] = useState({
    startDate: today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear(),
    endDate: null
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }

  const rederDatePicker = () => {
    if (openDatePicker.show === false) {
      return <Datepicker useRange={false} asSingle={true} value={value} onChange={handleValueChange} />
    }
  }

  const hideTabPane = (tabPaneId) => {
    var tabPane = document.getElementById(tabPaneId);
    console.log(tabPane)
    if (tabPane.classList.contains("show")) {
      tabPane.classList.remove("active");
      tabPane.classList.remove("show"); // Loại bỏ lớp d-none để hiển thị tab-pane
    } else {
      tabPane.classList.add("active");
      // tabPane.classList.remove("active");
      tabPane.classList.add("show"); // Thêm lớp d-none để ẩn tab-pane
    }
  }


  return (
    <div>
      <section className="w-full layout relative flex flex-col pt-40 pt-[28rem]">
        <div className={`${styles["home-search"]} absolute z-30`}>
          <div className={`${styles["card-box-shadown"]} relative mx-auto mb-10 h-[250px] w-[1128px] cursor-pointer rounded-xl object-cover 2lg:flex`}>
            <img alt="logo" className="transition-all duration-200 card-box-shadown relative mx-auto mb-10 h-[250px] w-full cursor-pointer rounded-xl object-cover 2lg:flex" src="https://storage.googleapis.com/futa-busline-web-cms-prod/Artboard_2_8_c5af86ae89/Artboard_2_8_c5af86ae89.png" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
          </div>
          {/* Chọn loại vé - hướng dẫn */}
          <div className={`${styles["search-form"]}`}>
            {/* Chọn loại vế */}
            <div className="flex items-center justify-between text-[15px]">
              {/* Loại vé một chiều */}
              <div className={`${styles["radio-group"]}`}>
                <label onClick={() => handleRadioClick(false)} className={`${styles["radio-wrapper"]} ${selectedOption ? '' : styles["radio-wrapper-checked"]}`}>
                  <span className={`${styles["ant-radio"]} ${selectedOption ? '' : styles["ant-radio-checked"]}`}>
                    <input type="radio" className={`${styles["ant-radio-input"]}`} name="type-ticker" value="1" />
                  </span>
                  <span className={`${selectedOption ? '' : styles["ant-radio-inner"]}`}></span>
                  <span>Một chiều</span>
                </label>

                {/* Loại vé khứ hồi */}
                <label onClick={() => handleRadioClick(true)} className={`${styles["radio-wrapper"]} ${selectedOption ? styles["radio-wrapper-checked"] : ""}`}>
                  <span className={`${styles["ant-radio"]} ${selectedOption ? styles["ant-radio-checked"] : ""}`}>
                    <input type="radio" className={`${styles["ant-radio-input"]}`} name="type-ticker" value="1" />
                  </span>
                  <span className={`${selectedOption ? styles["ant-radio-inner"] : ""}`}></span>
                  <span>Khứ hồi</span>
                </label>
              </div>

              {/* Hướng dẫn */}
              <span className="cursor-pointer font-medium 2lg:contents" style={{ color: 'orange' }}>
                <NavLink target="_blank" rel="noreferrer" to="/huong-dan-dat-ve-tren-web">Hướng dẫn mua vé</NavLink>
              </span>
            </div>

            {/* Chọn địa điểm - Ngay - So Luong */}
            <div className="grid grid-cols-1 pb-4 pt-4 grid-cols-2 gap-4">
              <div className="relative flex justify-center items-center gap-4">
                {/* Diem di */}
                <div className="flex-1">
                  <label>Điểm đi</label>
                  <div onClick={() => {
                    dispatch({
                      type: "OPEN_FORM_DI",
                      title: "Điểm đi",
                      positionLeft: "220px",
                      Component: <ModalAdress></ModalAdress>
                    })
                  }} data-bs-toggle="modal" data-bs-target="#ModalLocaltion" type='button' className={`${styles["input-search"]} btn item-start mt-1 flex w-full cursor-pointer font-medium items-center`}>
                    <span className="max-w-[140px] truncate max-w-[220px]">{origin}
                      <div className="text-[13px] font-normal leading-[15px] text-[#4A4A4A]">
                      </div>
                    </span>
                  </div>
                </div>

                <img className={`${styles["switch-location"]} bottom-6 h-8 w-8 bottom-3 h-10 w-10`} src={switch_location} alt="switch location icon" />

                {/* Diem den */}
                <div className="flex-1 text-left">
                  <label>Điểm đến</label>
                  <div onClick={() => {
                    dispatch({
                      type: "OPEN_FORM_DEN",
                      title: "Điểm đến",
                      positionLeft: "496px",
                      Component: <ModalAdress></ModalAdress>
                    })
                  }} data-bs-toggle="modal" data-bs-target="#ModalLocaltion" className={`${styles["input-search"]} item-start mt-1 flex w-full cursor-pointer font-medium items-center justify-start`}>
                    <span className="max-w-[140px] truncate max-w-[220px]">{destination}
                      <div className="text-[13px] font-normal leading-[15px] text-[#4A4A4A]">
                      </div>
                    </span>
                  </div>
                </div>
              </div>

              {/*  Ngày và số lượng*/}
              <div className='flex'>
                {/* Ngay di */}
                <div id={`${styles["date-picker"]}`} className='mr-4 flex flex-1 flex-col'>
                  <label>Ngày đi</label>

                  {rederDatePicker()}

                </div>

                {/* Số lượng */}
                <div className='mr-4 flex flex-1 flex-col'>
                  <label>Số vé</label>
                  <div data-bs-toggle="dropdown" className={`${styles["input-search"]} item-start mt-1 flex w-full cursor-pointer font-medium items-center`}>
                    <span className="w-[220px]">{numberTicket}</span>

                    <img alt="" style={{ width: "32px", height: "32px" }} src={arrow_down_select}></img>

                    <ul className={`dropdown-menu overflow-hidden`} style={{ width: "261.6px", padding: 0 }}>
                      <li onClick={()=>{setNumberTicket(1)}} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>1</span>
                        <img className={`${numberTicket===1? styles["show"]: styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={()=>{setNumberTicket(2)}} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>2</span>
                        <img className={`${numberTicket===2? styles["show"]: styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={()=>{setNumberTicket(3)}} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>3</span>
                        <img className={`${numberTicket===3? styles["show"]: styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={()=>{setNumberTicket(4)}} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>4</span>
                        <img className={`${numberTicket===4? styles["show"]: styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={()=>{setNumberTicket(5)}} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>5</span>
                        <img className={`${numberTicket===5? styles["show"]: styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Button tìm kiếm */}
            <div className="relative flex w-full justify-center">
              <button className="absolute z-10 h-12 rounded-full bg-orange-500 px-20 text-base text-white">Tìm chuyến xe</button>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full pt-12'>
        <div className='w-[1128px] m-auto flex gap-6'>

          {/* Bo loc */}
          <div className='w-[360px] border border-[#DDE2E8] bg-white pt-3 rounded-xl'>
            <div className='flex justify-between p-[16px]'>
              <span className=''>BỘ LỌC TÌM KIẾM</span>
              <div className='flex gap-2' style={{cursor: "pointer"}}>
                <span className='text-rose-600'>Bỏ lọc</span>
                <img alt='' src={delete_filter} />
              </div>
            </div>
            <div className=''>
              <span className='p-[16px]'>Giờ đi</span>
              <div className='ml-[10px] p-[16px]'>
                <div>
                  <input type='checkbox' className='scale-150' value={1} />
                  <label className='px-[8px] ml-1'>Sáng sớm 00:00 - 06:00 (0)</label>
                </div>
                <div>
                  <input type='checkbox' className='scale-150' value={2} />
                  <label className='px-[8px] ml-1'>Buổi sáng 06:00 - 12:00 (0) (0)</label>
                </div>
                <div>
                  <input type='checkbox' className='scale-150' value={3} />
                  <label className='px-[8px] ml-1'>Buổi chiều 12:00 - 18:00 (0)</label>
                </div>
                <div>
                  <input type='checkbox' className='scale-150' value={4} />
                  <label className='px-[8px] ml-1'>Buổi tối 18:00 - 24:00 (0)</label>
                </div>
              </div>

              <div className="w-full h-[0.5px] bg-black bg-opacity-10"></div>
              <span className='p-[16px]'>Loại xe</span>
              <div class="mt-2 flex flex-wrap gap-2 p-[16px]">
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Ghế</div>
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Giường</div>
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Limousine</div>
              </div>

              <div className="w-full h-[0.5px] bg-black bg-opacity-10"></div>
              <span className='p-[16px]'>Hàng ghế</span>
              <div class="mt-2 flex flex-wrap gap-2 p-[16px]">
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Hàng đầu</div>
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Hàng giữa</div>
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Cuối</div>
              </div>

              <div className="w-full h-[0.5px] bg-black bg-opacity-10"></div>
              <span className='p-[16px]'>Tầng</span>
              <div class="mt-2 flex flex-wrap gap-2 p-[16px]">
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Tầng trên</div>
                <div class="cursor-pointer rounded-md border bg-white py-1 px-3 text-[14px] font-normal border-[#DDE2E8]">Tầng dưới</div>
              </div>
            </div>
          </div>

          {/* Chuyen di */}
          <div className='flex-1'>
            {/* Header Origin - Destination */}
            <div className='pb-[24px]'>
              <div className="text-xl font-medium block">Đồng Nai  - Cần Thơ  (4)</div>
            </div>

            <div className={`${styles["card-box-shadown"]} border border-[#DDE2E8] bg-white pt-3 rounded-xl overflow-hidden`}>
              {/* Thong tin chuyen di */}
              <div className='px-[10px]'>
                <div className='flex gap-x-2.5'>
                  {/* Thoi gian xuat phat - tho gian den */}
                  <div className='flex flex-col flex-1'>
                    <div className="flex gap-4">
                      <span>20:00</span>
                      <div className='flex items-center flex-1'>
                        <img src={pickup} alt="pickup" />
                        <span className="flex-1 border-b-2 border-dotted"></span>
                        <span className="text-gray text-center leading-4">11 giờ
                          <br />
                          <span className="text-[13px]">(Asian/Ho Chi Minh)</span>
                        </span>
                        <span className="flex-1 border-b-2 border-dotted"></span>
                        <img src={station} alt="station" />
                      </div>
                      <span>07:00</span>
                    </div>

                    <div className='flex justify-between'>
                      <span>Bến Xe Đà Lạt</span>
                      <span>Bến Xe Cần Thơ</span>
                    </div>
                  </div>

                  {/* Loai xe cho trong */}
                  <div className='flex flex-col'>
                    <div className='flex gap-x-2.5'>
                      {/* Loai xe */}
                      <div className='flex items-center gap-x-1'>
                        <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                        <span>Limousine</span>
                      </div>
                      {/* Cho trong */}
                      <div className='flex items-center gap-x-1'>
                        <div class="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                        <span>1 cho trong</span>
                      </div>
                    </div>
                    <div className='flex flex-1 items-end justify-end'>
                      <span>435.000đ</span>
                    </div>
                  </div>
                </div>

                {/* Lan phan cach */}
                <div className="w-full h-[0.5px] bg-black bg-opacity-10 my-3"></div>

                {/* Chon Chuyen bottom  */}
                <div className='flex justify-between mb-3'>
                  <div className=''>
                    <ul className="flex" id="myTab" role="tablist">
                      <li onClick={() => { hideTabPane("home-tab-pane") }} className="nav-item" role="presentation">
                        <button id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="false">Chọn ghế</button>
                      </li>
                      <li onClick={() => { hideTabPane("profile-tab-pane") }} className="nav-item ml-[24px]" role="presentation">
                        <button id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Lịch trình</button>
                      </li>
                      <li onClick={() => { hideTabPane("contact-tab-pane") }} className="nav-item ml-[24px]" role="presentation">
                        <button id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Chính sách</button>
                      </li>
                    </ul>
                  </div>

                  <NavLink type="button" className="btn btn-success" to="/chon-tuyen">
                    <span>Chọn chuyến</span>
                  </NavLink>
                </div>
              </div>

              {/* Noi dung tab */}
              <div className={`${styles["custom-scroll-bar"]} overflow-auto tab-content m-1 bg-gray-100 max-h-[392px]`} id="myTabContent">
                <div className="tab-pane fade" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                  <Bill></Bill>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>Lịch trình</div>
                <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                  {/* Content */}
                  <div className='py-[10px]'>
                    <div className='py-2 px-[16px]'>
                      <h2> Chính sách huỷ vé</h2>
                      <div>
                        <ul className='list-disc mx-3'>
                          <li> Chỉ được chuyển đổi vé 1 lần duy nhất</li>
                          <li> Chi phí hủy vé từ 10% – 30% giá vé tùy thuộc thời gian hủy vé so với giờ khởi hành ghi trên vé và số lượng vé cá nhân/tập thể áp dụng theo các quy định hiện hành.</li>
                          <li> Quý khách khi có nhu cầu muốn thay đổi hoặc hủy vé đã thanh toán, cần liên hệ với Trung tâm tổng đài 1900 6067 hoặc quầy vé chậm nhất trước 24h so với giờ xe khởi hành được ghi trên vé, trên email hoặc tin nhắn để được hướng dẫn thêm.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="w-full h-[6px] bg-black bg-opacity-10"></div>
                    <div className='px-3 py-2'>
                      <h2>Yêu cầu khi lên xe</h2>
                      <ul className='list-disc mx-3'>
                        <li>Có mặt tại Văn phòng/Bến xe (Địa điểm xe đón trực tiếp) trước 30 phút để làm thủ tục lên xe (đối với ngày lễ tết cần ra trước 60 phút).</li>
                        <li>Xuất trình thông tin vé được gửi qua SMS/Email/Futa App hoặc liên hệ quầy vé để nhận thông tin vé trước khi lên xe.</li>
                        <li>Không mang thức ăn/đồ uống có mùi lên xe.</li>
                        <li>Không hút thuốc, không sử dụng đồ uống có cồn hoặc sử dụng chất kích thích trên xe.</li>
                        <li>Không mang các vật dễ cháy nổ lên xe.</li>
                        <li>Không vứt rác trên xe.</li>
                        <li>Không mang động vật lên xe.</li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
