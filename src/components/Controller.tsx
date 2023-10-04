import React from "react";
import { useState,useEffect } from "react";
import Button from "../components/Button";

function Controller() {
  const [hasWon, setHasWon] = useState(false);
  const handlePlaceBet = () => {
    setHasWon(true);
    console.log(hasWon);
  };
useEffect (()=>{
    console.log('use Effect');
},[hasWon])
  return (
    <div>
      <div className="container mx-auto bg-green-500">
        <Button runFunction={handlePlaceBet}/>
      </div>
    </div>
  );
}

export default Controller;
