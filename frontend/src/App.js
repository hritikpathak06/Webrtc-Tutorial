import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <>
      <div>
        <h2>Video Chat App</h2>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
    </>
  );
};

export default App;
