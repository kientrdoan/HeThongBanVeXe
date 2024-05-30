import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function PaymentStatus() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    useEffect(() => {
        // Lấy URL hiện tại
        const currentUrl = window.location.href;

        // Thay đổi hostname và port cho URL mới
        const newUrl = currentUrl.replace('localhost:3000', 'localhost:8080/thanhtoan');

        // Thực hiện yêu cầu GET đến server mới ngay khi component được mount
        fetch(newUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Data received from server:', data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    const vnpAmount = queryParams.get('vnp_Amount');
    const vnpBankCode = queryParams.get('vnp_BankCode');
    const vnpBankTranNo = queryParams.get('vnp_BankTranNo');
    const vnpCardType = queryParams.get('vnp_CardType');
    const vnpOrderInfo = queryParams.get('vnp_OrderInfo');
    const vnpPayDate = formatDateString(queryParams.get('vnp_PayDate'))
    const vnpTransactionNo = queryParams.get('vnp_TransactionNo');
    const vnpTransactionStatus = queryParams.get('vnp_TransactionStatus')

    function formatDateString(dateString) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        const hours = dateString.substring(8, 10);
        const minutes = dateString.substring(10, 12);
        const seconds = dateString.substring(12, 14);
        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    function formatPaymentStatus(status) {
        return status === "00" ? " Thành công " : " Thất bại ";
    }

    function PaymentStatus(vnpTransactionStatus) {
        const statusClass = (vnpTransactionStatus === "00" ? "text-green-800" : "text-red-500")
        return (
            <span className={statusClass}>{formatPaymentStatus(vnpTransactionStatus)}</span>
        );
    }

    function formatToVND(valueString) {
        // Chia số cho 100 và làm tròn xuống số nguyên gần nhất
        const number = parseInt(valueString) / 100;

        // Định dạng số theo phần nghìn mà không có phần thập phân
        const formattedNumber = number.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0, // Loại bỏ phần thập phân
        });

        return formattedNumber;
    }

// Sử dụng hàm
    const amount = formatToVND('10000000'); // "100.000 ₫"

    const logParams = () => {
        console.log(queryParams);

    };



    return (
        <div className="flex justify-center items-center">

            <div className=" rounded-xl border border-[#DDE2E8] bg-white px-4 py-3 text-[15px] m-4 w-1/2">
                <p className="text-xl font-medium text-black text-center">Thông tin trạng thái thanh toán:
                    {/*<span>{formatPaymentStatus(vnpTransactionStatus)}</span>*/}
                    {PaymentStatus(vnpTransactionStatus)}
                </p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-gray">Số tiền thanh toán:</span>
                    <span className="text-green-700">{formatToVND(vnpAmount)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray">Phương thức thanh toán:</span>
                    <span className="text-black">{vnpCardType + " " + vnpBankCode}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray">Thông tin giao dịch:</span>
                    <span className="text-orange-500">{vnpOrderInfo}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray">Thời gian giao dịch:</span>
                    <span className="text-black">{vnpPayDate}</span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray">Trạng thái thanh toán:</span>
                    <span className="text-black">{PaymentStatus(vnpTransactionStatus) }</span>
                </div>

                <div className="mt-1 flex items-center justify-between">
                    <span className="text-gray">Mã đối chiếu giao dịch VnPay:</span>
                    <span className="text-black">{vnpTransactionNo}</span>
                </div>

                <div className="flex justify-center mt-4">
                    <a href="/" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Trở về trang chủ
                    </a>
                </div>
                
            </div>

        </div>


    );
}

export default PaymentStatus;
