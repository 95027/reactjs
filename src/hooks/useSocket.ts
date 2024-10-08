import { useEffect, useState } from "react";
import { io } from "socket.io-client";


const useSocket = () => {

    const [socket, setSocket] = useState<any>(null);

    const token = localStorage.getItem('token');

    useEffect(() => {

        const socketInstance = io(import.meta.env.VITE_BACKEND_URL, {
            auth: {
                token,
            }
        });

        setSocket(socketInstance);

        socketInstance.on('connect', () => {
            console.log('socket connected');
        });

        socketInstance.on('disconnect', () => {
            console.log('socket disconnected');
        });

        return () => {
            socketInstance.disconnect();
        }

    }, []);


    return socket;

}

export default useSocket;