import React, { useState } from 'react'
import styles from './editinfor.module.css'
import { updateInforAPI, updatePasswordAPI } from '../../redux/actions/EditInforAction'
import { useSelector } from 'react-redux'

export default function EditInfor() {
    let {inforAuth}= useSelector(state=> state.AuthReducer)

    let [inforUpdate, setInforUpdate]= useState({
        id: inforAuth.data.customerId,
        fullName: "",
        phoneNumber: "",
        email: ""
    })

    let [passwordUpdate, setPasswordUpdate]= useState({
        oldPassword: "",
        newPassword: "",
        comfirmPassword: ""
    })

    const handleChangeInfor= (e)=>{
        let {name, value}= e.target;
        let newData= {...inforUpdate, [name]: value};
        setInforUpdate(newData)
        // inforUpdate de cap nhat thong tin
        console.log(inforUpdate)
    }

    const updateInforOnclick= ()=>{
        updateInforAPI(inforUpdate)
    }

    const handleChangePassword= (e)=>{

        let {name, value}= e.target;
        let newData= {...passwordUpdate, [name]: value};
        setPasswordUpdate(newData)
        // passwordUpdate de cap nhat thong tin
        console.log(passwordUpdate)
    }

    const updatePasswordOnclick= ()=>{
        let password= {
            id: inforAuth.data.customerId,
            oldPassword: passwordUpdate.oldPassword,
            newPassword: passwordUpdate.newPassword,
        }
        updatePasswordAPI(password)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={(e)=>{e.preventDefault()}} className={styles.form}>
                <input type="text" placeholder="Họ và tên" name="fullName" required onChange={(e)=>{handleChangeInfor(e)}} value={inforUpdate.fullName}/>
                <input type="text" placeholder="phoneNumber" name="phoneNumber" onChange={(e)=>{handleChangeInfor(e)}} value={inforUpdate.phone}/>
                <input type="email" placeholder="email" name="email" required onChange={(e)=>{handleChangeInfor(e)}} value={inforUpdate.email} />
                <button type="submit" onClick={()=>{updateInforOnclick()}}>Save</button>
            </form>

            <form onSubmit={(e)=>{e.preventDefault()}} className={`${styles.form} mt-10`}>
                <input type="password" placeholder="Nhập mật khẩu" name="oldPassword" required onChange={(e)=>{handleChangePassword(e)}} value={passwordUpdate.oldPassword}/>
                <input type="password" placeholder="Nhập mật khẩu mới" name="newPassword" onChange={(e)=>{handleChangePassword(e)}} value={passwordUpdate.newPassword}/>
                <input type="password" placeholder="Nhập mật khẩu xác nhận" name="comfirmPassword" required onChange={(e)=>{handleChangePassword(e)}} value={passwordUpdate.confirmPassword}/>
                <button type="submit" onClick={()=>{updateInforOnclick()}}>Submit</button>
            </form>
        </div>
    )
}
