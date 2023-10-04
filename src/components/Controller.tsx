import React from "react";
import { useState,useEffect } from "react";
import Button from "../components/Button";
import BetBox from "../components/BetBox";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const [betDirection,setBetDirection] = useState("Up");

  const handlePlaceBet = () => {
    setHasWon(true);
    console.log(hasWon);
  };
useEffect (()=>{
    console.log(betDirection);
},[betDirection])
  return (
    <div>
      <div className="w-full md:w-[850px] lg:w-[1200px] py-12 mx-auto px-5">
        <Button runFunction={handlePlaceBet}/>
        <BetBox betDirection={betDirection} setBetDirection={setBetDirection}/>
      </div>
    </div>
  );
}

export default Controller;
