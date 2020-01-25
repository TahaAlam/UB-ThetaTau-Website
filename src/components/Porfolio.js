
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

export default () => {
  const allImagesQuery = graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "logo" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `
  const {
    allFile: { edges: images },
  } = useStaticQuery(allImagesQuery)

  return (
    <div style={{
      marginBottom: '1rem',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    }}>
      {images.map((image, index) => (
        <Img
          key={index}
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(`.`)[0]}
        />
      ))}
    </div>
  )
}
