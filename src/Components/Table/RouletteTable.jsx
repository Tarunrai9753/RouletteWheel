import React from "react";
import "tailwindcss/tailwind.css";
import Coin from "../Coin/Coin";
import ClickSound from "../assets/NumberClick/Click.wav";

const RouletteTable = ({ start, isMuted }) => {
  const zeros = [
    { value: "00", color: "bg-green-500" },
    { value: "0", color: "bg-green-500" },
  ];

  const numbers = [
    { value: "1", color: "bg-red-500" }, { value: "4", color: "bg-black" },
    { value: "7", color: "bg-red-500" }, { value: "10", color: "bg-black" },
    { value: "13", color: "bg-black" }, { value: "16", color: "bg-red-500" },
    { value: "19", color: "bg-red-500" }, { value: "22", color: "bg-black" },
    { value: "25", color: "bg-red-500" }, { value: "28", color: "bg-black" },
    { value: "31", color: "bg-black" }, { value: "34", color: "bg-red-500" },
    { value: "2", color: "bg-black" }, { value: "5", color: "bg-red-500" },
    { value: "8", color: "bg-black" }, { value: "11", color: "bg-black" },
    { value: "14", color: "bg-red-500" }, { value: "17", color: "bg-black" },
    { value: "20", color: "bg-black" }, { value: "23", color: "bg-red-500" },
    { value: "26", color: "bg-black" }, { value: "29", color: "bg-black" },
    { value: "32", color: "bg-red-500" }, { value: "35", color: "bg-black" },
    { value: "3", color: "bg-red-500" }, { value: "6", color: "bg-black" },
    { value: "9", color: "bg-red-500" }, { value: "12", color: "bg-red-500" },
    { value: "15", color: "bg-black" }, { value: "18", color: "bg-red-500" },
    { value: "21", color: "bg-red-500" }, { value: "24", color: "bg-black" },
    { value: "27", color: "bg-red-500" }, { value: "30", color: "bg-red-500" },
    { value: "33", color: "bg-black" }, { value: "36", color: "bg-red-500" },
  ];

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio(ClickSound);
      audio.play();
    }
  };

  const renderNumberCells = () => {
    return numbers.map((number, index) => (
      <button
        key={index}
        className={`p-2 m-1 text-white border-2 rounded-md border-white ${number.color}`}
        onClick={playClickSound}
      >
        {number.value}
      </button>
    ));
  };

  const zerocells = () => {
    return zeros.map((number, index) => (
      <button
        key={index}
        className={`p-2 mt-4 rounded-md h-10 text-white border-2 border-white ${number.color}`}
        onClick={playClickSound}
      >
        {number.value}
      </button>
    ));
  };

  return (
    <div className="m-2 p-1 text-sm">
      <div className="flex gap-2 ps-14 mb-2">
        <button
          className="p-1 w-1/4 text-center rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          1st 12
        </button>
        <button
          className="p-1 ms-10 w-1/4 text-center rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          2nd 12
        </button>
        <button
          className="p-1 ms-10 w-1/4 text-center rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          3rd 12
        </button>
      </div>

      <div className="flex justify-center md:flex-nowrap">
        <div
          style={{
            borderTopLeftRadius: "30px 30px",
            borderBottomLeftRadius: "30px 30px",
          }}
          className="grid grid-cols-1 ms-1 me-2 border-2 px-1 rounded-md border-white border-spacing-2"
        >
          {zerocells()}
        </div>
        <div className="grid grid-cols-12 mt-1 border-2 rounded-md border-white border-spacing-2">
          {renderNumberCells()}
        </div>
      </div>

      <div className="flex justify-center mt-3 ms-10">
        <button
          className="p-1 text-center w-1/3 rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          1 to 18
        </button>
        <button
          className="p-1 ms-14 text-center w-1/3 rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          19 to 36
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-4 gap-3">
        <button
          className="p-2 m-1 text-center rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          EVEN
        </button>
        <button
          className="p-2 m-1 text-center bg-red-500 rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          RED
        </button>
        <button
          className="p-2 m-1 text-center bg-black rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          BLACK
        </button>
        <button
          className="p-2 m-1 text-center rounded-md text-white border-2 border-white"
          onClick={playClickSound}
        >
          ODD
        </button>
      </div>

      <div className="flex flex-wrap justify-center mt-4 gap-3">
        <Coin start={start} isMuted={isMuted} />
      </div>
    </div>
  );
};

export default RouletteTable;
