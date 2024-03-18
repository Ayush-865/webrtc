"use client";
import { useSocket } from "@/context/webrtc/socket";
import usePeer from "@/hooks/usePeer";
import React, { useEffect } from "react";

const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();

  useEffect(() => {
    socket?.on("connect", () => {
      console.log(socket.id);
    });
  }, [socket]);
  return <div></div>;
};

export default Room;
