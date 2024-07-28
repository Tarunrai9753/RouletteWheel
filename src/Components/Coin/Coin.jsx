import React from "react";
import "./Coin.css";
import ClickSound from "../assets/NumberClick/Click.wav";

const Coin = ({ isMuted }) => {
  const coins = [
    { number: "10", image: "Coin.png" },
    { number: "20", image: "Coin.png" },
    { number: "50", image: "Coin.png" },
    { number: "100", image: "Coin.png" },
    { number: "250", image: "Coin.png" },
  ];

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio(ClickSound);
      audio.play();
    }
  };

  return (
    <div className="flex h-0 gap-6 pt-1">
      <span
        className="text-base font-bold shadow-yellow-800"
        style={{ color: "rgb(247 221 137)" }}
      >
        SELECT BET{" "}
        <img
          className="w-6 animated-image ms-8"
          src="arrow.png"
          alt="Arrow Left"
        />
      </span>
      {coins.map((chip, index) => (
        <button
          key={index}
          style={{
            backgroundImage: `url(${chip.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: "50%",
          }}
          className="h-16 w-16 items-center font-bold justify-center text-xs hover:scale-125"
          onClick={playClickSound}
        >
          <span
            style={{
              fontSize: "14px",
              color: "yellow",
              backgroundColor: "rgba(0, 0, 0, 0.4",
              padding: "2px 4px",
              borderRadius: "4px",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.10)",
            }}
          >
            {chip.number}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Coin;
