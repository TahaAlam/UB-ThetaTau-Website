
import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Carousel from 'nuka-carousel';



const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstagramContent(limit: 12) {
          edges {
            node {
              link
              localImage {
                childImageSharp {
                  fluid(quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
              images {
                standard_resolution {
                  width
                  height
                  url
                }
                low_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
          <Carousel  withoutControls ={true} autoplay autoplayInterval={1000} wrapAround dragging
  transitionMode="fade" easing={"easeExpOut"} speed={1000} >
        {
          data.allInstagramContent.edges.map((item, i) => (
            item.node.localImage ? (
              <div key={i}>
                <a
                  href={item.node.link}
                  target='_blank'
                  rel='noopener'
                  tabIndex='0'
                >
                  <Image
                    fluid={item.node.localImage.childImageSharp.fluid}
                    style={{ maxHeight: 'calc(50vh - 4rem)' }}
                    imgStyle={{ objectFit: 'contain' }}
                  />
                </a>
              </div>
            ) : (<div></div>)
          ))
        }
        </Carousel>
    )}
  />
);

export default Instagram;