import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./winning.css";

const WinningIndex = () => {
  const [name, setName] = useState("");
  const [wallet, setWallet] = useState(0);

  useEffect(() => {
    axios
      .get("https://sss.divyagames.in/api/user/userprofile/26")
      .then((result) => {
        const userData = result.data.RESPONSE;
        setName(userData.name);
        setWallet(userData.wallet);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="flex absolute p-3 gap-3 text-center">
      <div className="h-7 w-14 border-2 rounded-lg text-green-700 border-green-400 font-bold">
        {wallet}
      </div>
      <div className="h-7 w-20 border-2 rounded-lg border-yellow-400 text-yellow-700 flex items-center justify-center">
        <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-1" /> 00
      </div>
      <div className="h-7 w-20 border-2 rounded-lg border-red-400 text-white font-bold flex items-center justify-center">
        {name}
      </div>
    </div>
  );
};

export default WinningIndex;
