import { RouletteWheel } from "react-casino-roulette";
import RouletteTable from "../Table/RouletteTable";
import "react-casino-roulette/dist/index.css";
import "./Rouletewheel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp, faVolumeMute } from "@fortawesome/free-solid-svg-icons";

const Wheel = ({
  withAnimation,
  winningBet,
  doSpin,
  start,
  isMuted,
  handleClick,
}) => {
  return (
    <>
      <div className="m-0 sm:flex gap-11">
        <div className="pt-16 ps-2">
          <RouletteWheel
            winningBet={winningBet}
            withAnimation={withAnimation}
          />
        </div>
        <RouletteTable
          start={start}
          isMuted={isMuted}
          handleClick={handleClick}
        />
      </div>
      <div className="flex gap-2">
        <button className="ms-10" onClick={handleClick}>
          {isMuted ? (
            <FontAwesomeIcon icon={faVolumeMute} />
          ) : (
            <FontAwesomeIcon icon={faVolumeUp} />
          )}
        </button>
        <button
          type="button"
          className="px-4 ms-10 mt-1 h-10 bg-yellow-800 text-white rounded-2xl disabled:opacity-50"
          disabled={start}
          onClick={doSpin}
        >
          Spin
        </button>


       
      </div>
    </>
  );
};

export default Wheel;
