import React from 'react'
import "./digital-uhr-app2.scss"
import moment from "moment"
function DigitalUhrApp2(props) {
    const dateTime= moment();
    
    const dateStr=dateTime.format("LL");
    const hourStr=dateTime.format("HH:mm");
    const dayStr=dateTime.format("dddd");
    const hour=dateTime.format("HH");
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
  return (
    <div style={clockStyle} className='digitalUhrApp2'>
        <div className='time'>{hourStr}</div>
        <div>
            <div className='date'>{dateStr}</div>
            <div className="day">{dayStr} {time}</div>
        </div>


    </div>
  )
}

export default DigitalUhrApp2