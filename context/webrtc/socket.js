"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const connection = io();
    console.log("socket connection", connection);
    setSocket(connection);
  }, []);

  socket?.on("connect_error", async (err) => {
    console.log("Error establishing socket", err);
    try {
      await fetch("/api/webrtc/socket");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
