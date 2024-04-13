import React from "react";
import { UseSocket } from "../context/SocketContext";

const Notifications = () => {
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
  return (
    <div>
      {call.isRecievedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{call.name} is Calling</h1>
          <button onClick={answerCall}>Accept</button>
        </div>
      )}
    </div>
  );
};

export default Notifications;
