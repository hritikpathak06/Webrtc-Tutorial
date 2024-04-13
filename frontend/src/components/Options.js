import React, { useState } from "react";
import { UseSocket } from "../context/SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = ({ children }) => {
  const {
    stream,
    setStream,
    me,
    setMe,
    call,
    setCall,
    callAccepted,
    setCallAccepted,
    callEnded,
    setCallEnded,
    name,
    setName,
    myVideo,
    userVideo,
    connectionRef,
    answerCall,
    callUser,
    leaveCall,
  } = UseSocket();

  const [idToCall, setIdToCall] = useState("");

  return (
    <div>
      <div>
        {/* <form> */}
          <div>
            <h1>Account Info</h1>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CopyToClipboard text={me}>
              <button>Copy ID</button>
            </CopyToClipboard>
          </div>

          <div>
            <h2>Calll User</h2>
            <input
              type="text"
              placeholder="Id To call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
            />
            {callAccepted && !callEnded ? (
              <button onClick={leaveCall}>Hang Up</button>
            ) : (
              <button onClick={() => callUser(idToCall)}>Make A Call</button>
            )}
          </div>
        {/* </form> */}
      </div>
      {children}
    </div>
  );
};

export default Options;
