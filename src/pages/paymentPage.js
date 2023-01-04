import {useParams} from "react-router-dom"
const PaymentPage = () => {
    const params = useParams()
    // console.log(params)
    return <h1>Payment Page- {params.price}</h1>
}

export default PaymentPage