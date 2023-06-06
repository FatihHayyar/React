import React from 'react'
import "./profile-card.scss"
import Statistics from './statistics';


function ProfileCard(props) {
    const img=require(`../../assets/img/${props.image||'profile-card.jpg'}`);
    const profileBackground={
        backgroundImage:`url(${img})`
    }
    
  return (

        <div className='profile-card'>
            <div className='header' style={profileBackground}></div>
            <div className='content'>
                <div className='avatar' style={profileBackground}></div>
                <h3>{props.name}</h3>
                <h5>{props.location}</h5>
                <div className='stats'>
                   
                   {
                    props.statistics.map((item,index)=>(<Statistics key={index} title={item.title} stat={item.stat}/>))
                   }
                    
                </div>
            </div>
        </div>
    
  )
}

export default ProfileCard