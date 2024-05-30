import Axios from "axios"
import { GET_PROVINCE_API } from "../constants/ModalAddressConstant"

export const getProvinceListAPI= ()=>{
    return (dispatch)=>{
        let promise =  Axios({
            url: "http://localhost:8080/datve/get-all-province",
            method: "GET",
          })
      
          promise.then((result) => {
            // console.log(result.data)
            if(result.data !== null){
              dispatch({
                
                type: GET_PROVINCE_API,
                provinceList: result.data.data,
              })
            }
          })
      
          promise.catch((err) => {
            console.log(err)
          })
    }
}