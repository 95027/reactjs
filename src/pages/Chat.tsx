import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
  
    const socketInstance = io('http://localhost:3000', {
      auth: {
        token: localStorage.getItem('token'),
      },
    });

    setSocket(socketInstance);

    socketInstance.on('connect', () => {
      console.log('Socket connected');
    });

    socketInstance.on('chat message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input && socket) {
      socket.emit('chat message', input); 
      setInput(''); 
    }
  };

  return (
    <div>
      <h2>Chat</h2>

      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{JSON.stringify(msg)}: </strong>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
    </div>
  );
};

export default Chat;
