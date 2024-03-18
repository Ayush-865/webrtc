"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const page = () => {
  const [roomId, setRoomId] = useState("");

  const router = useRouter();
  const createAndJoinRoom = async () => {
    const roomId = uuidv4();
    router.push(`/webrtc/${roomId}`);
  };

  const joinRoom = () => {
    if (roomId) {
      router.push(`/webrtc/${roomId}`);
    } else {
      alert("Please enter a room id");
    }
  };

  return (
    <>
      <div>
        <h1>Google Meet</h1>
        <div>
          <input
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            placeholder="Enter Room id"
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <h1>----------------------OR----------------------</h1>
        <button onClick={createAndJoinRoom}>Create A New Room</button>
      </div>
    </>
  );
};

export default page;
