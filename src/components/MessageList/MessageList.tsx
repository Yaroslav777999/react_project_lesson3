import React, { FC } from 'react';
import { Message } from '../../App';

interface MessageListProp {
  messages: Message[];
}

export const MessageList: FC<MessageListProp> = ({ messages }) => (
  <ul className='ulList'>
    {messages.map((message) => (
      <li className='liList'key={message.id}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
