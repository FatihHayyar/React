import React from 'react'

export const Inlinestyling = () => {
  return (
    <div
        style={{
            color:"red",
            border: "1px solid black",
            margin:"5px",
            padding: "5px",
            borderRadius: "5px",
            textAlign: "center"
        }}
    >
        <h2
        style={{
            color:"blue",
        }}
        >React Fundamentals</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis doloribus, odio explicabo dignissimos sit necessitatibus ratione consequatur aliquam alias minus assumenda illum beatae quo amet, fugit consectetur delectus praesentium repellat.</p>
    </div>
  )
}
