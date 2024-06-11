import Axios from "axios"

export const updateInforAPI = (infor) => {
    let promise = Axios({
        url: "http://localhost:8080/auth/customer",
        method: "PUT",
        data: infor,
    })

    promise.then((result) => {
        console.log(result.data.data)
    })

    promise.catch((err) => {
        console.log(err)
    })
}

export const updatePasswordAPI = (password) => {
    let promise = Axios({
        url: "http://localhost:8080/auth/customer",
        method: "PUT",
        data: password,
    })

    promise.then((result) => {
        console.log(result.data.data)
    })

    promise.catch((err) => {
        console.log(err)
    })
}
