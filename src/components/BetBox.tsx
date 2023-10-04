import React from 'react'
import BetButton from "../components/BetButton";

function BetBox({betDirection,setBetDirection}:props) {
  return (
    <div className='mt-5'>
        <div className='py-2 border bg-red-100'>Layer 01</div>
        <div className='flex flex-row justify-between py-2 border'>
            <BetButton direction='Down' betDirection={betDirection} setBetDirection={setBetDirection}/>
            <BetButton direction='Up' betDirection={betDirection} setBetDirection={setBetDirection}/>
        </div>
        <div className='py-2 border bg-fuchsia-100'>Layer 03</div> 
    </div>
  )
}

export default BetBox

type props={
    betDirection:string;
    setBetDirection:any;
}