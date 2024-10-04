import { useAuth } from "../context/AuthContext"
import Chat from "./Chat";


const Home = () => {

    const { logout } = useAuth();


    return (
        <div>
            home
            <div>
                <button onClick={logout}>logout</button>
                <Chat/>
            </div>
        </div>
    )
}

export default Home
