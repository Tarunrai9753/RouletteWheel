import React, { useState, useEffect, useRef } from "react";
import Wheel from "../Wheel/RouletteWheel";
import WinningIndex from "../TokenIndex/WinningIndex";
import WheelSound from "../assets/Wheel/Ball.wav";
const Data = () => {
  const [start, setStart] = useState(false);
  const [winningBet, setWinningBet] = useState("-1");
  const [resultNumber, setResultNumber] = useState(null);
  const [withAnimation, setWithAnimation] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(new Audio(WheelSound));

  const numbers = [
    "0", "28", "9", "26", "30", "11", "7", "20", "32", "17", "5", "22", "34",
    "15", "3", "24", "36", "13", "1", "00", "27", "10", "25", "29", "12", "8",
    "19", "31", "18", "6", "21", "33", "16", "4", "23", "35", "14", "2",
  ];

  const doSpin = () => {
    setStart(true);
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setWinningBet(numbers[randomIndex]);
    setWithAnimation(true);
    audioRef.current.play();
  };

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        setResultNumber(winningBet);
        setStart(false);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [start, winningBet]);

  const handleClick = () => {
    setIsMuted((prevState) => !prevState);
    audioRef.current.pause();
  };

  return (
    <div>
      <WinningIndex />
      <Wheel
        winningBet={winningBet}
        withAnimation={withAnimation}
        doSpin={doSpin}
        start={start}
        isMuted={isMuted}
        handleClick={handleClick}
      />
      <button onClick={handleClick}></button>
    </div>
  );
};

export default Data;
