import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

   const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  }

  const handleSubmit = (event) => {
    if (!name || !room) {
      event.preventDefault();
    }
    else {
      return null
    }
  }

  return (
    <div className = "joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className = "heading">Join</h1>
        <div>
          <input placeholder="" className="joinInput" type="text" onChange={handleChangeName} />
        </div>
        <div>
          <input placeholder="" className="joinInput mt-20" type="text" onChange={handleChangeRoom} />
        </div>
        <Link onClick={handleSubmit} to = {`/chat ? name = ${name} & room = ${room}`}>
          <button type="submit" className="button mt-20" >Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;
