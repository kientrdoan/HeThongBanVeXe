import Axios from "axios"
import { GET_CHUYEN_XE } from "../constants/HomeConstants"


export const getChuyenXeAPI= (maTinhDi, maTinhDen, ngayXuatPhat)=>{
    return (dispatch)=>{
        let promise =  Axios({
            url: "http://localhost:8080/chuyenxe/get-chuyen-xe",
            method: "GET",
            params: {
              maTinhDi: maTinhDi,
              maTinhDen: maTinhDen,
              ngayXuatPhat: ngayXuatPhat,
            }
          })
      
          promise.then((result) => {
            // console.log(result.data.data)
            dispatch({
              type: GET_CHUYEN_XE,
              chuyenXe: result.data.data,
            })
          })
      
          promise.catch((err) => {
            console.log(err)
          })
    }
}