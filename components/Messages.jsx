'use client';
import { useState, useEffect } from 'react';
import Spinner from './Spinner.jsx';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const gethMessages = async () => {
      try {
        const res = await fetch('/api/messages');
        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log('Error fetching messages', error);
      } finally {
        setLoading(false);
      }
    };
    gethMessages();
  }, []);

  return <div>Messages</div>;
};

export default Messages;
