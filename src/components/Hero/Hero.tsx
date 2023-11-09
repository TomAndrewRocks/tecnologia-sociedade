import { Player } from "@lottiefiles/react-lottie-player";

export const Hero = () => {
  return (
    <Player
      src="https://lottie.host/487d825d-230d-4122-922d-10a00fdc59e0/6wLfypL6jh.json"
      className="player"
      loop
      autoplay
      style={{ height: "35%", width: "35%" }}
    />
  );
};
