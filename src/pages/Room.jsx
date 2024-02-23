import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomId } = useParams();
  const { username } = useParams();
  const myMeeting = async (element) => {
    // generate Kit Token
    const appID = 167804337;
    const serverSecret = "26ef825d722e7e14520bf8f08bde611d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      username
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div>
      <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }} />
    </div>
  );
};

export default Room;
