import { useAuth } from "../context/AuthContext"


const Home = () => {

    const { logout } = useAuth();


    return (
        <div>
            home
            <div>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    )
}

export default Home
