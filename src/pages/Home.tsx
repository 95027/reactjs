import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext"


const Home = () => {

    const { logout } = useAuth();


    return (
        <div>
            home
            <div>
                <button onClick={logout}>logout</button>
                <Link to={'/chat'}>chat</Link>
                <Link to={'/razorpay'}>Razorpay</Link>
            </div>
        </div>
    )
}

export default Home
