import * as React from "react"
import Gallery from "../components/gallery.js"
import "../assets/css/global.css"

const Home = ({ data }) => {
  const images = data.allImageSharp.edges
  return <Gallery imgs={images} />
}

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`

export default Home
