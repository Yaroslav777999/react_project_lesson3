import React, { FC, useCallback, useEffect, useState } from 'react';
import { Form } from '../components/Form/Form';
import { MessageList } from '../components/MessageList/MessageList';
import { nanoid } from 'nanoid';
import './index.css';
import List from '../components/List/List';

export interface Message {
  id: string;
  text: string;
  author: string;
}

const defaultMessages = [
  {
    id: '1',
    author: 'Geekbrains',
    text: 'Welcome to the chat',
  },
];

export const App: FC = () => {
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === 'User') {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            text: 'Im BOT',
            author: 'BOT',
          }),
        1000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const handleSendMessage = useCallback(
    ({ text, author }: { text: string; author: string }) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: nanoid(),
          author,
          text,
        },
      ]);
    },
    []
  );

  return (
    <>
      <div className='bg'>
        <p className='header'>Welcome to the ReaChat</p>


        <div className='wrp'>
          <div className='wrp-chat'>
            <MessageList messages={messages} />
            <Form addMessage={handleSendMessage} />
          </div>
          <List />
        </div>
      </div>
    </>
  );
};
