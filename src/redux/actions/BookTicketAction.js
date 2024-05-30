import Axios from "axios"

export const postBookTicket = (infor) => {
    return (dispatch)=>{
        let promise = Axios({
            url: "http://localhost:8080/vexe/insert",
            method: "POST",
            data: infor,
        })
    
        promise.then((result) => {
            dispatch({
                type: "LIST_ID_VE",
                listIdVe: result.data.data,
            })
        })
    
        promise.catch((err) => {
            console.log(err)
        })
    }
}

export const getListVeDaDatByIdChuyenXe= (id)=>{
    return Axios({
        url: "http://localhost:8080/vexe/get-list-ve-da-dat",
        method: "GET",
        params: {
            idChuyenXe: id,
        },
    })

    .then((result) => {
        return result.data.data
    })

    .catch((err) => {
        console.log(err)
    })
}