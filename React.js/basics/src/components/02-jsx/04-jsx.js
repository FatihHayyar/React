import React from 'react'

const Jsx4 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];

  
    

    return (
        <div>
            <ul>
                {
                names.map((name,index) => {
                    
                    return <li key={name+index}>{name}</li>
                    
                })
            }
            </ul>
            <select name="" id="">
                <option disabled>Select city</option>
                {
                    cities.map((city,index)=>{
                        return <option key={city+index}>{city}</option>
                    })
                }
            </select>
        </div>
    )
}

export default Jsx4;