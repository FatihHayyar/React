import React from 'react'
import Korkuluk from "../../assets/img/image2.jpg"
const Images = () => {
    const stil={
        margin:"0 1rem",
        height:"300px"
    }
  return (
   
    <div>
        <img src="./image1.jpg" alt="northern light" title='northern light' style={stil} />
        <img src="https://picsum.photos/200/300?grayscale" alt="" style={stil}/>
        <img src={Korkuluk} alt="" style={stil}/>
        <img src={require("../../assets/img/image3.jpg")} alt="" style={stil}/>
   
    </div>
  )
}

export default Images