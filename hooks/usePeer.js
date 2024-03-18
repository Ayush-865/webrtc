"use client";
import { useSocket } from "@/context/webrtc/socket";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const usePeer = () => {
  const socket = useSocket();
  const roomId = useRouter().query.roomId;
  const [peer, setPeer] = useState(null);
  const [myId, setMyId] = useState(null);
  const isPeerSet = useRef(false);

  useEffect(() => {
    if (isPeerSet.current || !roomId || !socket) return;
    isPeerSet.current = true;
    (async function initPeer() {
      const myPeer = new (await import("peerjs")).default();
      setPeer(myPeer);

      myPeer.on("open", (id) => {
        console.log("peer open", id);
        setMyId(id);
        socket?.emit("join-room", roomId, id);
      });
    })();
  }, [roomId, socket]);

  return { peer, myId };
};

export default usePeer;
