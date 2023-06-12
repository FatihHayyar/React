import React, { useEffect, useState } from 'react'
import "./digital-clock-app3.scss"
import moment from "moment"
function DigitalClock(props) {
    const [dateTime, setDateTime] = useState(moment())
    
    const dateStr=dateTime.format("LL");
    const dayStr=dateTime.format("dddd");
    const hour=dateTime.format("HH");
    const minute=dateTime.format("mm");
    const second=dateTime.format("ss");

    let showMenu=second%2===0?hour+":"+minute:hour+" "+minute;
   

    let time="";
    if(hour<22&&hour>19){
        time="Evening";
    }else if(hour<19&&hour>16){
        time="Afternoon";
    }else if(hour<16&&hour>12){
        time="Mittag";
    }else if(hour<12&&hour>6){
        time="Morgen";
    }else {
        time="Night";
    }
    const clockStyle={
        color:props.textColor,
        backgroundColor:props.bgColor,
    };
    useEffect(()=>{
        const timer=setInterval(()=>{
            setDateTime(moment());
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[])
  return (
    <div style={clockStyle} className='digitalUhrApp2'>
        <div className='time'>{showMenu}</div>
        <div>
            <div className='date'>{dateStr}</div>
            <div className="day">{dayStr} {time}</div>
        </div>


    </div>
  )
}
export default DigitalClock