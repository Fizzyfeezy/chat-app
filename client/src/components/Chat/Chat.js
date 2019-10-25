import React, { useState, useEffect } from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({location}) => {

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
    //console.log(location.search);
    console.log(name, room);
  })

  return (
    <div>

    </div>
  )
}

export default Chat;
