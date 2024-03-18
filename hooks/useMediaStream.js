"use client";
import { useEffect, useRef, useState } from "react";

const useMediaStream = () => {
  const [state, setState] = useState(null);
  const isStreamSet = useRef(false);

  useEffect(() => {
    if (isStreamSet.current) return;
    isStreamSet.current = true;
    (async function initMedia() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setState(stream);
        console.log("Setting stream");
      } catch (error) {
        console.log("Error getting media", error);
      }
    })();
  }, []);

  return { stream: state };
};

export default useMediaStream;
