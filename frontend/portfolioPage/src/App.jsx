import "./App.css";
import Header from "./components/Header/Header";
import ChooseSection from "./components/ChooseSection/ChooseSection";

function App() {
  return (
    <div className="mainAppContainer">
      <Header />
      <ChooseSection />
    </div>
  );
}

export default App;

{
  /* <video ref={videoRef} width="560" controls>
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
        /> */
}
// const [count, setCount] = useState(0);
// const videoRef = useRef(null);
// const [speed, setSpeed] = useState(1);

// const changeSpeed = (event) => {
//   const newSpeed = parseFloat(event.target.value);
//   setSpeed(newSpeed);
//   if (videoRef.current) {
//     videoRef.current.playbackRate = newSpeed;
//   }
// };
