import { useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';


const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const socket = useSocket();

  useEffect(() => {

    if (!socket) return;

    socket.on('chat message', (msg: any) => {

      setMessages((prev) => [...prev, msg])

    });

    return () => {
      socket.off('chat message')
    }

  }, [socket]);



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
