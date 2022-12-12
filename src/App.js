import "./App.css";
import RedQueen from "./RedQueen";

function App() {
  // const { ref, playState, getAnimation } = useWebAnimations({
  //   // keyframes: {
  //   //   transform: "translateX(500px)", // Move by 500px
  //   //   background: ["red", "blue", "green"], // Go through three colors
  //   // },
  //   keyframes: [
  //     { transform: "translateY(0px)" }, // Move by 500px
  //     { transform: "translateY(600px)" }, // Move by 500px
  //     // background: ["red", "blue", "green"], // Go through three colors
  //   ],
  //   animationOptions: {
  //     delay: 500, // Start with a 500ms delay
  //     duration: 1000, // Run for 1000ms
  //     iterations: "3000", // Repeat once
  //     direction: "normal", // Run the animation forwards and then backwards
  //     // easing: "ease-in-out", // Use a fancy timing function
  //     easing: "steps(6,end)", // Use a fancy timing function
  //   },
  //   onReady: ({ playState, animate, animation }) => {
  //     // Triggered when the animation is ready to play
  //   },
  //   onUpdate: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the running state or changes state
  //   },
  //   onFinish: ({ playState, animate, animation }) => {
  //     // Triggered when the animation enters the finished state
  //   },
  //   // More useful options...
  // });

  return (
    <div>
      <RedQueen />
    </div>
  );
}

export default App;
