"use client";
import { useSocket } from "@/context/webrtc/socket";
import useMediaStream from "@/hooks/useMediaStream";
import usePeer from "@/hooks/usePeer";
import React, { useEffect } from "react";
import Player from "../_components/Player";

const Room = () => {
  const socket = useSocket();
  const { peer, myId } = usePeer();
  const { stream } = useMediaStream();
  return (
    <div>
      <Player url={stream} muted={true} playing={myId} />
    </div>
  );
};

export default Room;
