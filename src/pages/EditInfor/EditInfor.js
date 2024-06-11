import React, { useEffect, useState } from 'react'
import styles from './editinfor.module.css'
import { updateInforAPI, updatePasswordAPI } from '../../redux/actions/EditInforAction'
import { useSelector } from 'react-redux'
import Notification from '../../components/notification/notification'
import Axios from 'axios'

export default function EditInfor() {
    let {inforAuth}= useSelector(state=> state.AuthReducer)

    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

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
        // updateInforAPI(inforUpdate)
        if(inforUpdate.fullName === ''&& inforUpdate.phoneNumber === '' && inforUpdate.email === ''){
            setNotification({ show: true, message: 'Vui lòng nhập thông tin', type: 'error' });
            return
        }
        let promise = Axios({
            url: "http://localhost:8080/auth/customer",
            method: "PUT",
            data: inforUpdate,
        })
    
        promise.then((result) => {
            setNotification({ show: true, message: 'Cập nhật thông tin thành công', type: 'error' });
        })
    
        promise.catch((err) => {
            console.log(err)
            setNotification({ show: true, message: 'Cập nhật thông tin không thành công', type: 'error' });
        })
    }

    const handleChangePassword= (e)=>{

        let {name, value}= e.target;
        let newData= {...passwordUpdate, [name]: value};
        setPasswordUpdate(newData)
        // passwordUpdate de cap nhat thong tin
        console.log(passwordUpdate)
    }

    const updatePasswordOnclick= ()=>{
        if(passwordUpdate.newPassword === ''&& passwordUpdate.comfirmPassword === '' && passwordUpdate.oldPassword === ''){
            setNotification({ show: true, message: 'Vui lòng nhập thông tin mật khẩu cũ - mới - xác nhận', type: 'error' });
            return
        }

        if(passwordUpdate.newPassword !== passwordUpdate.comfirmPassword){
            setNotification({ show: true, message: 'Mật khẩu xác thực không khớp', type: 'error' });
            return
        }

        let password= {
            id: inforAuth.data.customerId,
            oldPassword: passwordUpdate.oldPassword,
            newPassword: passwordUpdate.newPassword,
        }

        let promise = Axios({
            url: "http://localhost:8080/auth/customer",
            method: "PUT",
            data: password,
        })
    
        promise.then((result) => {
            setNotification({ show: true, message: 'Cập nhật mật khẩu thành công', type: 'error' });
            console.log(result.data.data)
        })
    
        promise.catch((err) => {
            console.log(err)
            setNotification({ show: true, message: 'Cập nhật mật khẩu không thành công', type: 'error' });
        })
        // updatePasswordAPI(password)
    }

    const handleCloseNotification = () => {
        setNotification({ show: false, message: '', type: '' });
    };

    useEffect(() => {
        let timer;
        if (notification.show) {
            timer = setTimeout(() => {
                handleCloseNotification();
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [notification]);

    return (
        <div className={styles.container}>
            {notification.show && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={handleCloseNotification}
                />
            )}
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
                <button type="submit" onClick={()=>{updatePasswordOnclick()}}>Submit</button>
            </form>
        </div>
    )
}
