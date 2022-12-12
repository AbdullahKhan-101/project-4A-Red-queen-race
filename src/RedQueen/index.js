import React, { useEffect } from "react";
import "./style.css";
import useWebAnimations from "@wellyshen/use-web-animations";

const RedQueen = () => {
  let PlaybackrateRQ = 1;
  let PlaybackrateBG = 0;

  const background1Movement = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" }, // Move by 500px
      { transform: "translateX(-100%)" }, // Move by 500px
    ],
    animationOptions: {
      duration: 36000,
      iterations: 6000,
      playbackRate: PlaybackrateBG,
    },
  });

  const background2Movement = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" }, // Move by 500px
      { transform: "translateX(-100%)" }, // Move by 500px
    ],
    animationOptions: {
      duration: 36000,
      iterations: 6000,
      playbackRate: PlaybackrateBG,
    },
  });

  const forground1Movement = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" }, // Move by 500px
      { transform: "translateX(-100%)" }, // Move by 500px
    ],

    animationOptions: {
      duration: 12000,
      iterations: 6000,
      playbackRate: PlaybackrateBG,
    },
  });

  const forground2Movement = useWebAnimations({
    keyframes: [
      { transform: "translateX(100%)" }, // Move by 500px
      { transform: "translateX(-100%)" }, // Move by 500px
    ],
    animationOptions: {
      duration: 12000,
      iterations: 6000,
      playbackRate: PlaybackrateBG,
    },
  });

  const RedQueen_alice = useWebAnimations({
    keyframes: [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ],
    animationOptions: {
      duration: 600,
      iterations: 6000,
      easing: "steps(7, end)",
      direction: "reverse",
      playbackRate: PlaybackrateRQ,
    },
  });

  const adjustBackgroundPlayBack = () => {
    if (PlaybackrateRQ < 0.8) {
      PlaybackrateBG = (PlaybackrateRQ / 2) * -1;
    } else if (PlaybackrateRQ > 1.2) {
      PlaybackrateBG = PlaybackrateRQ / 2;
    } else {
      PlaybackrateBG = 0;
    }

    forground1Movement.getAnimation().playbackRate = PlaybackrateBG;
    forground2Movement.getAnimation().playbackRate = PlaybackrateBG;
    background1Movement.getAnimation().playbackRate = PlaybackrateBG;
    background2Movement.getAnimation().playbackRate = PlaybackrateBG;
  };

  const goFaster = () => {
    PlaybackrateRQ *= 1.1;
    RedQueen_alice.getAnimation().playbackRate = PlaybackrateRQ;
    adjustBackgroundPlayBack();
  };

  const intervall = () => {
    const fganimation = forground1Movement.getAnimation();
    fganimation.currentTime = fganimation.effect.getTiming().duration / 2;

    const bganimation = background1Movement.getAnimation();
    bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

    setInterval(() => {
      if (PlaybackrateRQ > 0.4) {
        PlaybackrateRQ *= 0.9;
        RedQueen_alice.getAnimation().playbackRate = PlaybackrateRQ;
      }
    }, 3000);
  };

  useEffect(() => {
    intervall();
  });

  return (
    <div onClick={goFaster}>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
              ref={RedQueen_alice.ref}
            />
          </div>
        </div>

        <div className="scenery" id="foreground1" ref={forground1Movement.ref}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=""
          />
        </div>
        <div className="scenery" id="foreground2" ref={forground2Movement.ref}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="background1" ref={background1Movement.ref}>
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="background2" ref={background2Movement.ref}>
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
};
export default RedQueen;
