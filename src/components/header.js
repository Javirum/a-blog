import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import logo from "../images/ALBERT.png";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: #663399;
  margin-bottom: 1.45rem,
`;

const Header = () => (
  <HeaderWrapper>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.5rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `20px`,
            marginLeft: `50px`
          }}
        >
          Finance & Voiceover
        </Link>
        <img src={logo} alt="logo"
          style={{
            width: `51px`,
            float: `left`,
          }} />
      </h1>
    </div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
