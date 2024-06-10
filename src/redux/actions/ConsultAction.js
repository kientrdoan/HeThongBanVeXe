import Axios from "axios"

export const getInforTicket = async (phone, maGhe, ngayDat) => {
    try {
        const result = await Axios({
            url: "http://localhost:8080/vexe/tra-cuu-ve",
            method: "GET",
            params: {
                phone: phone,
                maGhe: maGhe,
                ngayDat: ngayDat,
            },
        });
        return result.data.data;
    } catch (err) {
        console.error(err);
        throw err; 
    }
};
