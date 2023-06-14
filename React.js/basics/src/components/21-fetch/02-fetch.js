import React, { useEffect, useState } from 'react'

function Fetch2() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://648a1aca5fa58521cab0d275.mockapi.io/api/v1/users")
        .then((resp)=>resp.json())
        .then(veri=>setData(veri))
        .catch(error=>console.log(error)) 
    },[])
   
  return (
    <div>
        <table>
            <thead style={{textAlign:"center"}}>
                <th>Sira</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Country</th>
                <th>Email</th>
                <th>avatar</th>
                <th>Phone Nummer</th>
            </thead>
            <tbody>
            {
            data.map((veri,index)=>{
                return (
                    <tr key={index} style={{border:"2px solid red"}}>
                        <td style={{width:"30px" ,textAlign:"center"}}>{index+1}</td>
                        <td style={{width:"120px"}}>{veri.firstName}</td>
                        <td style={{width:"120px"}}>{veri.lastName}</td>
                        <td style={{width:"220px"}}>{veri.country}</td>
                        <td style={{width:"220px"}}>{veri.email}</td>
                        <td><img src={veri.avatar} alt="avatar" width='50'/></td>
                        <td>{veri.phoneNummer}</td>
                    </tr>
                    
                )
            })
        }
            </tbody>
        </table>
        
    </div>
  )
}

export default Fetch2