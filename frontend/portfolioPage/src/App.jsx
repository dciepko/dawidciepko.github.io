import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Film from "/videos/Film.mp4";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const videoRef = useRef(null);
  const [speed, setSpeed] = useState(1);

  const changeSpeed = (event) => {
    const newSpeed = parseFloat(event.target.value);
    setSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  return (
    <>
      <div></div>
      <h1>Cześć Agata</h1>
      <div className="card">
        <video ref={videoRef} width="560" controls>
          <source src={Film} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <label>Prędkość: {speed}x</label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={speed}
          onChange={changeSpeed}
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
