import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [roomCode, setRoomCode] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate(0)
    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}/${username}`);
    }
  return (
    <div>
      <h1 className="p-5">Welcome! Best Video Conferencing App</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-1"></div>
          <div className="col-4">
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Enter Room Code
              </span>
              <input
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Enter Your Name
              </span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <button type="submit" className="m-3 btn btn-primary">
              Enter Room
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Home;
