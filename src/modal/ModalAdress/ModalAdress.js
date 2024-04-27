import React, { useState } from 'react'
import styles from "../modal.module.css"
import { useDispatch, useSelector } from 'react-redux';

export default function ModalAdress() {

  let [valueInput, setValueInput]= useState({
    value: "",
  })

  let { title, provice } = useSelector(state => state.ModalReducer);
  let dispatch= useDispatch()

  const renderListProvince = () => {
    console.log(valueInput)
    if(valueInput.value === ''){
      return provice.data.map((item, index) => {
        return <h4 onClick={()=>{
          if(title==="Điểm đi"){
            dispatch({
              type: "ORIGIN_LOCALTION",
              origin: item.name,
            })
          }else{
            dispatch({
              type: "DESTINATION_LOCALTION",
              destination: item.name,
            })
          }
        }} data-bs-dismiss="modal" key={index} className='p-3 border-b-[0.75px] border-b-slate-200 hover:bg-orange-200' id="list-item-1">{item.name}</h4>
      })
    }else{
      return provice.data.filter(item=> item.name.includes(valueInput.value)).map((item, index) => {
        return <h4 onClick={()=>{
          if(title==="Điểm đi"){
            dispatch({
              type: "ORIGIN_LOCALTION",
              origin: item.name,
            })
          }else{
            dispatch({
              type: "DESTINATION_LOCALTION",
              destination: item.name,
            })
          }
        }} data-bs-dismiss="modal" key={index} className='p-3 border-b-[0.75px] border-b-slate-200 hover:bg-orange-200' id="list-item-1">{item.name}</h4>
      })
    }
    
  }

  const handleChange= (event)=>{
    let{value}= event.target;
    setValueInput({
      value: value,
    })
  }

  return (
    <div>
        <div className='m-3'>
          <input onChange={(event)=>{handleChange(event)}} value={valueInput.value} name='input-localtion' style={{ padding: "10px" }} type="input" className="form-control" id="local"/>
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
