import ReactPlayer from "react-player";
const Player = ({ playerId, url, muted, playing }) => {
  return (
    <>
      <ReactPlayer key={playerId} url={url} muted={muted} playing={playing} />
    </>
  );
};

export default Player;
