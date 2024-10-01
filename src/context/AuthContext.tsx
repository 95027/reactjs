import { createContext, useContext, useEffect, useState } from "react"
import instance from "../axios";


const authContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: any }) => {

    const [user, setUser] = useState<any>(null);

    const getUserByToken = async () => {
        const res = await instance.get('/auth/getUserByToken');
        if (res.data) {
            setUser(res.data.user);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
    }

    useEffect(() => {
        getUserByToken();
    }, []);

    return (
        <authContext.Provider value={{ user, getUserByToken, logout }}>{children}</authContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(authContext);
    if (context) {
        return context;
    }
    throw new Error('context error')
}


export default authContext