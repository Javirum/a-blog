import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";
import Archive from "./archive";
import styled from "styled-components";

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 4fr 1fr;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
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
