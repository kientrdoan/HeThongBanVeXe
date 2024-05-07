import React, { useEffect, useState } from 'react'
import styles from "../modal.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { getProvinceListAPI } from '../../redux/actions/ModalAddressAction';
import Axios from 'axios';

export default function ModalAdress() {

  let [valueInput, setValueInput] = useState({
    value: "",
  })

  let { title, origin, destination} = useSelector(state => state.ModalReducer);
  let { provinceList } = useSelector(state => state.ModalAddressReducer);
  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProvinceListAPI())
  }, [])

  const renderListProvince = () => {
    // console.log("province: ", provinceList)
    if (valueInput.value === '') {
      return provinceList.filter(item=> item.tenTinh!== origin.tenTinh && item.tenTinh !== destination.tenTinh).map((item, index) => {
        return <h4 id={item.maTinh} onClick={() => {
          if (title === "Điểm đi") {
            dispatch({
              type: "ORIGIN_LOCALTION",
              origin: {
                id: item.maTinh,
                tenTinh: item.tenTinh
              },
            })
          } else {
            dispatch({
              type: "DESTINATION_LOCALTION",
              destination: {
                id: item.maTinh,
                tenTinh: item.tenTinh
              },
            })
          }
        }} data-bs-dismiss="modal" key={index} className='p-3 border-b-[0.75px] border-b-slate-200 hover:bg-orange-200'>{item.tenTinh}</h4>
      })
    } else {
      return provinceList.filter(item => item.tenTinh.includes(valueInput.value)&&item.tenTinh!== origin.tenTinh && item.tenTinh !== destination.tenTinh).map((item, index) => {
        return <h4 id={item.maTinh} onClick={() => {
          if (title === "Điểm đi") {
            dispatch({
              type: "ORIGIN_LOCALTION",
              origin: {
                id: item.maTinh,
                tenTinh: item.tenTinh
              },
            })
          } else {
            dispatch({
              type: "DESTINATION_LOCALTION",
              destination: {
                id: item.maTinh,
                tenTinh: item.tenTinh
              },
            })
          }
        }} data-bs-dismiss="modal" key={index} className='p-3 border-b-[0.75px] border-b-slate-200 hover:bg-orange-200'>
          {item.tenTinh}
        </h4>
      })
    }

  }

  const handleChange = (event) => {
    let { value } = event.target;
    setValueInput({
      value: value,
    })
  }

  return (
    <div>
      <div className='m-3'>
        <input onChange={(event) => { handleChange(event) }} value={valueInput.value} name='input-localtion' style={{ padding: "10px" }} type="input" className="form-control" id="local" />
      </div>
      <div>
        <h2 className='ml-3 mt-3 mb-4'>TỈNH/THÀNH PHỐ</h2>
        <div style={{ maxHeight: "200px" }} className={`${styles["custom-scroll-bar"]} overflow-auto`}>
          {renderListProvince()}
        </div>
      </div>

    </div>
  )
}
