import { useRazorpay, RazorpayOrderOptions } from "react-razorpay"
import instance from "../axios";

const Razorpay = () => {

    const { isLoading, Razorpay } = useRazorpay();

    const handlePayment = async () => {

        const details = {
            'amount': 20,
            'currency': 'INR',
        }

        const { data } = await instance.post('/razorpay/order', details);

        const { order } = data;

        const options: RazorpayOrderOptions = {

            key: import.meta.env.VITE_RAZORPAY_KEY,
            order_id: order.id,
            amount: order.amount,
            currency: order.currency,
            name: 'Test razorpay',
            handler: async (res) => {
                const result = await instance.post('/razorpay/verify-payment', res);

                if (result.status === 200) {
                    alert('payment successfull');
                }
            },
            prefill: {
                name: 'sai kumar'
            },
            theme: {
                color: 'red'
            }

        }

        const razorpayInstance = new Razorpay(options);

        razorpayInstance.open();

    }

    return (
        <div>
            <h1>Razorpay Payment</h1>
            <button onClick={handlePayment} disabled={isLoading}>Pay Now</button>
        </div>
    )
}

export default Razorpay
