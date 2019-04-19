import React from 'react';

import ChatroomPreview from './ChatroomPreview'

const Home = ({
  chatrooms,
  onEnterChatroom
}) => (
  <div>
    {
      chatrooms.map(chatroom => (
        <ChatroomPreview
          key={chatroom.name}
          chatroom={chatroom}
          onEnter={() => onEnterChatroom(chatroom.name)}
        />
      ))
    }
  </div>
);

export default Home;
