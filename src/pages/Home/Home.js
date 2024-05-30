import React, { useEffect, useState } from 'react'
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
import { getChuyenXeAPI } from '../../redux/actions/HomeAction'



export default function Home() {

  // Hàm chuyển đổi chuỗi thời gian "HH:MM" thành số phút
  const timeStringToMinutes = (timeStr) => {
    const [hours, minutes] = timeStr.split(":").map(Number);
    return hours * 60 + minutes;
  };

  // Hàm kiểm tra xem một giờ có nằm trong khoảng thời gian không
  const isTimeInRange = (time, timeRange) => {
    const timeInMinutes = timeStringToMinutes(time);
    const [start, end] = timeRange.split(" - ");
    const startInMinutes = timeStringToMinutes(start);
    const endInMinutes = timeStringToMinutes(end);

    return timeInMinutes >= startInMinutes && timeInMinutes <= endInMinutes;
  };

  // Hàm lọc các chuyến xe thỏa mãn ít nhất một khoảng thời gian
  const filterChuyenXeByTimeRanges = (chuyenXeList, timeRanges) => {
    // console.log("hre: ", timeRanges)
    if (timeRanges.length === 0) {
      // Nếu `timeRanges` rỗng, trả về danh sách ban đầu
      return chuyenXeList;
    }
    
    return chuyenXeList.filter((chuyenXe) => {
      return timeRanges.some((range) => isTimeInRange(chuyenXe.gioXuatPhat, range));
    });
  };

  var today = new Date();


  let [stateRoundTrip, setStateRoundTrip] = useState(false)

  // let [stateBtnSearch, setStateBtnSearch] = useState(false)

  const [typeTicket, setTypeTicket] = useState(1);

  let [openDatePicker] = useState({
    show: false,
  })

  let [numberTicket, setNumberTicket] = useState(1)

  let [filter, setFilter] = useState([])

  let { origin, destination } = useSelector(state => state.ModalReducer);

  let dispatch = useDispatch()

  let { listChuyenXe, listChuyenXeStorage } = useSelector(state => state.HomeReducer)

  let handleSelectFilter = (selected) => {
    const index = filter.indexOf(selected)
    // console.log(index)
    if (index !== -1) {
      let newFilter = [...filter]
      newFilter.splice(index, 1)
      setFilter(newFilter)
      // console.log(filter)

    }
    else {
      let newFilter = [...filter]
      newFilter.push(selected)
      setFilter(newFilter)
      // console.log(newFilter)
    }
    // console.log(filter)
  }

  const handleUnFilter = () => {
    const checkboxes = document.querySelectorAll("input[name='gioDi']");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false; // Sets the checkbox to be checked
    });
    let newFilter = [...filter]
    newFilter = []
    setFilter(newFilter)
  }

  // Xử lý chọn loại vé
  const handleSelectTypeTicket = (value) => {
    setTypeTicket(value); // Cập nhật giá trị được chọn
  };

  // Xử lý liên quan đến ngày đi
  const [value, setValue] = useState({
    startDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
    endDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  });

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
        // placeholder={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" +  today.getDate()}
        onChange={handleValueChange} />

    }
  }

  // Xử lý liên quan đến ngày về
  const [returnDate, setReturnDate] = useState({
    startDate: null,
    endDate: null,
  });

  const handleReturnDateChange = (newValue) => {
    // console.log("newValue:", newValue);
    if (newValue.startDate !== null && newValue.endDate !== null) {
      setReturnDate(newValue);
    } else {
      newValue = {
        startDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
        endDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
      }
      setReturnDate(newValue)
    }

  }

  const rederReturnDatePicker = () => {
    if (openDatePicker.show === false) {
      return <Datepicker
        useRange={false}
        asSingle={true}
        value={returnDate}
        displayFormat={"DD-MM-YYYY"}
        minDate={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()}
        maxDate={today.getFullYear() + "-" + (today.getMonth() + 2) + "-" + today.getDate()}
        // startFrom={today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()}
        placeholder="Thêm ngày về"
        onChange={handleReturnDateChange} />

    }
  }

  // Ẩn hiện tab
  const hideTabPane = (tabPaneId) => {
    var tabPane = document.getElementById(tabPaneId);
    // console.log(tabPane)
    if (tabPane.classList.contains("show")) {
      tabPane.classList.remove("active");
      tabPane.classList.remove("show"); // Loại bỏ lớp d-none để hiển thị tab-pane
    } else {
      tabPane.classList.add("active");
      // tabPane.classList.remove("active");
      tabPane.classList.add("show"); // Thêm lớp d-none để ẩn tab-pane
    }
  }

  const handleStateRoundTrip = () => {
    if (typeTicket === 1) {
      setStateRoundTrip(false)
    } else if (typeTicket === 2 && returnDate.startDate !== null) {
      setStateRoundTrip(true)
    }
    // setStateBtnSearch(true)
  }

  // Goi Reducer
  const getChuyenXe = (tinhXuatPhat, tinhDen, ngayXuatPhat) => {
    // console.log(origin.id, destination.id)
    // console.log(formatDate(value.startDate))
    // console.log(returnDate.startDate)
    dispatch(getChuyenXeAPI(tinhXuatPhat, tinhDen, ngayXuatPhat))
    // setStateBtnSearch(true)
  }

  // Hàm để định dạng lại chuỗi giờ phút
  function formatTime(timeStr) {
    // Đảm bảo timeStr là một chuỗi
    timeStr = String(timeStr);

    if (timeStr.includes(':')) {
      let [hours, minutes] = timeStr.split(':').map(Number);
      // Đảm bảo giờ và phút luôn có hai chữ số
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes || 0).padStart(2, '0');
      return `${hours}:${minutes}`;
    } else {
      // Nếu không có dấu ':', thì chỉ có giờ
      let hours = String(Number(timeStr)).padStart(2, '0');
      let minutes = '00';
      return `${hours}:${minutes}`;
    }
  }

  function formatDate(inputDate) {
    // Tách chuỗi dựa trên dấu '-'
    const [year, month, day] = inputDate.split('-');

    // Đảm bảo tháng và ngày có hai chữ số
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');

    return `${year}-${formattedMonth}-${formattedDay}`;
  }

  // Hàm để phân tích chuỗi giờ phút
  function parseTime(timeStr) {
    timeStr = String(timeStr); // Đảm bảo timeStr là một chuỗi
    let [hours, minutes] = formatTime(timeStr).split(':').map(Number);
    return { hours, minutes };
  }

  // Hàm để cộng giờ phút
  function addTimes(time1, time2) {
    let t1 = parseTime(time1);
    let t2 = parseTime(time2);

    let totalMinutes = t1.minutes + t2.minutes;
    let extraHours = Math.floor(totalMinutes / 60);
    let remainingMinutes = totalMinutes % 60;

    let totalHours = t1.hours + t2.hours + extraHours;

    let formattedTime = `${String(totalHours).padStart(2, '0')}:${String(remainingMinutes).padStart(2, '0')}`;

    return formattedTime;
  }

  // ${styles["card-box-shadown"]} 
  const renderChuyenXe = () => {
    // console.log(chuyenXe)
    return listChuyenXe.map((data, index) => {
      return <div key={index} id={data.id} className={`border border-[#DDE2E8] bg-white pt-3 rounded-xl mb-[25px] overflow-hidden`}>
        {/* Thong tin chuyen di */}
        <div className='px-[10px]'>
          <div className='flex gap-x-2.5'>
            {/* Thoi gian xuat phat - tho gian den */}
            <div className='flex flex-col flex-1'>
              <div className="flex gap-4">
                <span>{data.gioXuatPhat}</span>
                <div className='flex items-center flex-1'>
                  <img src={pickup} alt="pickup" />
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <span className="text-gray text-center leading-4">{data.thoiGianDuKien} giờ
                    <br />
                    <span className="text-[13px]">(Asian/Ho Chi Minh)</span>
                  </span>
                  <span className="flex-1 border-b-2 border-dotted"></span>
                  <img src={station} alt="station" />
                </div>
                <span>{addTimes(data.gioXuatPhat, data.thoiGianDuKien)}</span>
              </div>

              <div className='flex justify-between'>
                <span>Bến Xe {data.tenTinhDi}</span>
                <span>Bến Xe {data.tenTinhDen}</span>
              </div>
            </div>

            {/* Loai xe - cho trong */}
            <div className='flex flex-col'>
              <div className='flex gap-x-2.5'>
                {/* Loai xe */}
                <div className='flex items-center gap-x-1'>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span>{data.loaiXe}</span>
                </div>
                {/* Cho trong */}
                <div className='flex items-center gap-x-1'>
                  <div className="h-[6px] w-[6px] rounded-full bg-[#C8CCD3]"></div>
                  <span>{data.choTrong} chỗ trống</span>
                </div>
              </div>
              <div className='flex flex-1 items-end justify-end'>
                <span>{data.gia}đ</span>
              </div>
            </div>
          </div>

          {/* Lan phan cach */}
          <div className="w-full h-[0.5px] bg-black bg-opacity-10 my-3"></div>

          {/* Chon Chuyen bottom - Chinh Sach */}
          <div className='flex justify-between mb-3'>
            <div className=''>
              <ul className="flex" id={"myTab" + index} role="tablist">
                <li onClick={() => { hideTabPane("contact-tab-pane" + index) }} className="nav-item ml-[24px]" role="presentation">
                  <button id={"contact-tab" + index} data-bs-toggle="tab" data-bs-target={"contact-tab-pane" + index} type="button" role="tab" aria-controls={"contact-tab-pane" + index} aria-selected="false">Chính sách</button>
                </li>
              </ul>
            </div>

            <NavLink onClick={()=>{
              dispatch({
                type: "GET_VE_XE_BY_CHUYEN_XE",
                chuyenXe: {
                  listMaGhe: data.listMaGhe,
                  tinhXuatPhat: data.tenTinhDi,
                  tinhDen: data.tenTinhDen,
                  ngayXuatPhat: data.ngayKhoiHanh,
                  gioXuatPhat: data.gioXuatPhat,
                  gia: data.gia,
                },
              })
            }} type="button" className="btn btn-success" to={`/chon-tuyen/${data.id}`}>
              <span>Chọn chuyến</span>
            </NavLink>
          </div>
        </div>

        {/* Noi dung tab */}
        <div id="myTabContent" className={`${styles["custom-scroll-bar"]} overflow-auto tab-content m-1 bg-gray-100 max-h-[392px]`}>
          <div className="tab-pane fade" id={"contact-tab-pane" + index} role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
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
    })
  }

  const handleTripOption = (e) => {
    const tripOptions = document.querySelectorAll('.trip-option');
    tripOptions.forEach(option => {
      option.classList.remove('border-b-4', 'border-[#00613D]', 'border-b')
    })
    e.target.classList.add('border-b-4', 'border-[#00613D]', 'border-b')
  }

  const renderSelectRoundTrip = () => {
    if (stateRoundTrip === false) {
      return;
    }
    // ${typeTicket === 2 && returnDate.startDate !== null? "" : "hidden"}
    return <div className={`text-center text-base font-medium uppercase flex bg-white mb-[25px]`}>
      <div onClick={(e) => { getChuyenXe(origin.id, destination.id, formatDate(value.startDate)); handleTripOption(e) }} className={`trip-option w-1/2 border-b-4 border-[#00613D] border-b py-2 cursor-pointer`}>
        Chuyến đi - {formatDate(value.startDate)}
      </div>
      <div onClick={(e) => { getChuyenXe(destination.id, origin.id, formatDate(returnDate.startDate)); handleTripOption(e) }} className={`trip-option w-1/2 py-2 text-orange cursor-pointer`}>
        Chuyến về - {returnDate.startDate}
      </div>
    </div>
  }

  useEffect(()=>{dispatch({
    type: "GET_CHUYEN_XE",
    listChuyenXe: filterChuyenXeByTimeRanges(listChuyenXeStorage, filter),
    listChuyenXeStorage

  })}, [filter])

  return (
    <div>
      <section className="w-full layout relative flex flex-col pt-40 pt-[28rem]">
        <div className={`${styles["home-search"]} absolute z-30`}>
          <div className={`${styles["card-box-shadown"]} relative mx-auto mb-10 h-[250px] w-[1128px] cursor-pointer rounded-xl object-cover 2lg:flex`}>
            <img alt="logo" className="transition-all duration-200 card-box-shadown relative mx-auto mb-10 h-[250px] w-full cursor-pointer rounded-xl object-cover 2lg:flex" src="https://storage.googleapis.com/futa-busline-web-cms-prod/Artboard_2_8_c5af86ae89/Artboard_2_8_c5af86ae89.png" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent" }} />
          </div>
          {/*  Chọn loại vé - hướng dẫn - Chọn địa điểm - Ngay - So Luong - Button tìm kiếm */}
          <div className={`${styles["search-form"]}`}>
            {/*  Chọn loại vé - hướng dẫn */}
            <div className="flex items-center justify-between text-[15px]">
              {/* Loại vé một chiều */}
              <div className={`${styles["radio-group"]}`}>
                <label onClick={() => handleSelectTypeTicket(1)} className={`${styles["radio-wrapper"]} ${typeTicket === 1 ? styles["radio-wrapper-checked"] : ''}`}>
                  <span className={`${styles["ant-radio"]} ${typeTicket === 1 ? styles["ant-radio-checked"] : ''}`}>
                    <input type="radio" className={`${styles["ant-radio-input"]}`} name="type-ticker" value={1} />
                  </span>
                  <span className={`${typeTicket === 1 ? styles["ant-radio-inner"] : ''}`}></span>
                  <span>Một chiều</span>
                </label>

                {/* Loại vé khứ hồi */}
                <label onClick={() => handleSelectTypeTicket(2)} className={`${styles["radio-wrapper"]} ${typeTicket === 2 ? styles["radio-wrapper-checked"] : ""}`}>
                  <span className={`${styles["ant-radio"]} ${typeTicket === 2 ? styles["ant-radio-checked"] : ""}`}>
                    <input type="radio" className={`${styles["ant-radio-input"]}`} name="type-ticker" value={2} />
                  </span>
                  <span className={`${typeTicket === 2 ? styles["ant-radio-inner"] : ""}`}></span>
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
                {/*Chon Diem Di */}
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
                    {/* Diem di */}
                    <span id={origin.id} className="max-w-[140px] truncate max-w-[220px]">{origin.tenTinh}
                      <div className="text-[13px] font-normal leading-[15px] text-[#4A4A4A]">
                      </div>
                    </span>
                  </div>
                </div>

                <img className={`${styles["switch-location"]} bottom-6 h-8 w-8 bottom-3 h-10 w-10`} src={switch_location} alt="switch location icon" />

                {/* Chon Diem Den */}
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
                    {/* Diem Den */}
                    <span id={destination.id} className="max-w-[140px] truncate max-w-[220px]">{destination.tenTinh}
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

                {/* Ngay di */}
                <div id={`${styles["date-picker"]}`} className={`${typeTicket === 1 ? "hidden" : ""} mr-4 flex flex-1 flex-col`}>
                  <label>Ngày về</label>

                  {rederReturnDatePicker()}

                </div>

                {/* Số lượng */}
                <div className='mr-4 flex flex-1 flex-col'>
                  <label>Số vé</label>
                  <div data-bs-toggle="dropdown" className={`${styles["input-search"]} item-start mt-1 flex w-full cursor-pointer font-medium items-center`}>
                    <span className={`${typeTicket === 1 ? "w-[220px]" : "w-[120px]"}`}>{numberTicket}</span>

                    <img alt="" style={{ width: "32px", height: "32px" }} src={arrow_down_select}></img>

                    <ul className={`dropdown-menu overflow-hidden`} style={{ width: "261.6px", padding: 0 }}>
                      <li onClick={() => { setNumberTicket(1) }} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>1</span>
                        <img className={`${numberTicket === 1 ? styles["show"] : styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={() => { setNumberTicket(2) }} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>2</span>
                        <img className={`${numberTicket === 2 ? styles["show"] : styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={() => { setNumberTicket(3) }} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>3</span>
                        <img className={`${numberTicket === 3 ? styles["show"] : styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={() => { setNumberTicket(4) }} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>4</span>
                        <img className={`${numberTicket === 4 ? styles["show"] : styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>

                      <li onClick={() => { setNumberTicket(5) }} className='hover:bg-orange-200 flex justify-between items-center' style={{ height: "36px", padding: "5px 12px" }}>
                        <span>5</span>
                        <img className={`${numberTicket === 5 ? styles["show"] : styles["hidden"]}`} alt='' style={{ width: "18px", height: "18px" }} src={circle_checkbox_checked} />
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            {/* Button tìm kiếm */}
            <div className="relative flex w-full justify-center">
              <button onClick={() => { handleStateRoundTrip(); getChuyenXe(origin.id, destination.id, formatDate(value.startDate)) }} className="absolute z-10 h-12 rounded-full bg-orange-500 px-20 text-base text-white">Tìm chuyến xe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Loai Ghe- Hang Ghe- Tang Ghe */}
      {/* className={`w-full pt-12 ${Object.keys(chuyenXe).length === 0 ? "hidden" : ""}`} */}
      <section style={{ background: "#fbfafa" }} className={`w-full pt-12`}>
        <div className='w-[1128px] m-auto flex gap-6'>
          {/* Bo loc */}
          <div className='w-[360px] border border-[#DDE2E8] bg-white pt-3 rounded-xl'>
            <div className='flex justify-between p-[16px]'>
              <span className=''>BỘ LỌC TÌM KIẾM</span>
              <div onClick={handleUnFilter} className='flex gap-2' style={{ cursor: "pointer" }}>
                <span className='text-rose-600'>Bỏ lọc</span>
                <img alt='' src={delete_filter} />
              </div>
            </div>
            <div className=''>
              <span className='p-[16px]'>Giờ đi</span>
              <div className='ml-[10px] p-[16px]'>
                <div>
                  <input type='checkbox' name='gioDi' className='scale-150' value={1} onChange={(e) => {
                    handleSelectFilter("00:00 - 06:00");
                    // console.log(filter)
                  }} />
                  <label className='px-[8px] ml-1'>Sáng sớm 00:00 - 06:00 (0)</label>
                </div>
                <div>
                  <input type='checkbox' name='gioDi' className='scale-150' value={2} onChange={(e) => {
                    handleSelectFilter("06:00 - 12:00")
                  }} />
                  <label className='px-[8px] ml-1'>Buổi sáng 06:00 - 12:00 (0)</label>
                </div>
                <div>
                  <input type='checkbox' name='gioDi' className='scale-150' value={3} onChange={(e)=>{
                    handleSelectFilter("12:00 - 18:00")
                  }} />
                  <label className='px-[8px] ml-1'>Buổi chiều 12:00 - 18:00 (0)</label>
                </div>
                <div>
                  <input type='checkbox' name='gioDi' className='scale-150' value={4} onChange={(e)=>{
                    handleSelectFilter("18:00 - 24:00")
                  }}/>
                  <label className='px-[8px] ml-1'>Buổi tối 18:00 - 24:00 (0)</label>
                </div>
              </div>
            </div>
          </div>

          {/* Chuyen di */}
          <div className='flex-1'>
            {/* Header Origin - Destination */}
            <div className='pb-[24px]'>
              <div className="text-xl font-medium block">{origin.tenTinh}  - {destination.tenTinh}  ({listChuyenXe.length})</div>
            </div>

            {/* Thanh Chọn Chuyến Đi- Chuyến Về */}
            {renderSelectRoundTrip()}

            {/* Render Chuyen Xe */}
            {Object.keys(listChuyenXe).length !== 0 ? renderChuyenXe() : ""}
          </div>

        </div>
      </section>

    </div>
  )
}
