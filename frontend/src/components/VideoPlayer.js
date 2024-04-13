import React from "react";
import { UseSocket } from "../context/SocketContext";

const VideoPlayer = () => {
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
    <div style={{ display: "flex", gap: "10px" }}>
      {/* Own Video */}
        <div style={{ background: "black", width: "50%" }}>
          <h2 style={{ color: "white" }}>{name || "name"}</h2>
          <video playsInline  ref={myVideo} autoPlay></video>
        </div>
      {/* Users Video */}
      {callAccepted && !callEnded && (
        <div style={{ background: "black", width: "50%" }}>
          <h2 style={{ color: "white" }}>{call.name || "name"}</h2>
          <video playsInline  ref={userVideo} autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
