import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #663399;
  padding: 20px;
`;

const Header = () => (
  <HeaderWrapper>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `45px`,
        marginLeft: `50px`
      }}
    >
      Albert
      </Link>
    <Link
      to="/about"
      style={{
        color: `white`,
        textDecoration: `none`,
        fontSize: `20px`,
        marginLeft: `50px`
      }}
    >
      About
      </Link>
  </HeaderWrapper >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
