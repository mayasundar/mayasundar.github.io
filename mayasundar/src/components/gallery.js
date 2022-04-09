import React from "react"
import Img from "gatsby-image"

const Gallery = ({ imgs }) => {
  const images = imgs.sort(() => 0.5 - Math.random())
  return (
    <div className="masonry">
      {images.map((img, index) => {
        return (
          <Img
            className="brick"
            key={index}
            fluid={img.node.fluid}
            alt={img.node.fluid.src}
          />
        )
      })}
    </div>
  )
}

export default Gallery
