import React from 'react'

export const Internalstyling = () => {
    const styleTitle={
        color:"#ff0000",
        fontSize:"30px",
        textAlign: "center"
    }
    const styleParagraph={
        ...styleTitle,
        color:"blue",
        fontSize:"20px"
    }
  return (
    <div>
        <h2 style={styleTitle}>React Hooks</h2>
        <p style={styleParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam, commodi cumque mollitia fugit harum. Commodi modi blanditiis odio non? Nisi mollitia totam necessitatibus neque harum illum odit odio soluta.</p>
    </div>
  )
}
