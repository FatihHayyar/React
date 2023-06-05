import React from 'react'
import "./02-image-gallery.scss"
import images from "../../assets/data/images.json";
function Imagegallery() {
  return (
    <div className='image-gallery'>
        {
            images.map((image,index)=>(<div key={image.title}>
                <img src={require(`../../assets/img/${image.name}`)} alt={image.title} />
            </div>))
        }

    </div>
  )
}

export default Imagegallery