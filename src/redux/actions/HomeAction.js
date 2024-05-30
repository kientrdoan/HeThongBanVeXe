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
            console.log(result.data.data)
            if(result.data !== null){
              dispatch({
                type: GET_CHUYEN_XE,
                listChuyenXe: result.data.data,
                listChuyenXeStorage: result.data.data,
              })
            }
          })
      
          promise.catch((err) => {
            console.log(err)
          })
    }
}

// export const getVeXeByChuyenXeAPI= (idChuyenXe)=>{
//   console.log(typeof(idChuyenXe))
//   return (dispatch)=>{
//       let promise =  Axios({
//           url: "http://localhost:8080/vexe/get-all-ve-xe-by-chuyen-xe",
//           method: "GET",
//           params: {
//             idChuyenXe: idChuyenXe
//           }
//         })
    
//         promise.then((result) => {
//           // console.log(result.data.data)
//           dispatch({
//             type: "GET_VE_XE_BY_CHUYEN_XE",
//             VeXe: result.data.data,
//           })
//         })
    
//       //   promise.catch((err) => {
//       //     console.log(err)
//       //   })
//   }
// }