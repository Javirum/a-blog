import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";
import Archive from "./archive";
import styled from "styled-components";
import Img from "gatsby-image";
import { useSpring, animated } from 'react-spring'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
  `;

const Layout = ({ children, location }) => {
  const props = useSpring({ height: location.pathname == "/" ? 600 : 200, from: { height: location.pathname == "/" ? 800 : 100 } })
  const AnimatedImage = animated(Img)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: {
        regex: "/bolivar/"
    }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        {/* <Spring from={{  }} to={{ height: location.pathname === "/" ? 200 : 100 }}>
          {styles => (
            <div styler={{ overflow: "hidden", ...styles }}>
            </div>
            )}
          </Spring> */}
        {/* {location.pathname === "/" &&
        } */}
        <AnimatedImage fluid={data.file.childImageSharp.fluid} style={props} />
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
