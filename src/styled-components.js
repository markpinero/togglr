import React from 'react';
import styled, {injectGlobal, css} from 'styled-components';

const colors = {
  faded: '#f7f7f7',
  offblack: 'rgba(0,0,0,0.9)'
}

const small = (...args) => css `
  @media screen and (max-width: 600px) {
    ${ css(...args) }
  }
`

const medium = (...args) => css `
  @media screen and (min-width: 601px) {
    ${ css(...args) }
  }
`

injectGlobal `
  @import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, 'Helvetica', sans-serif;
    color: ${colors.offblack};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Mono', sans-serif;
  }

  h1 {
    font-size: 1.5em !important;
  }
`

export const Navbar = styled.nav `
  position: relative;
  display: flex;
  padding: 1em;
  background: ${colors.faded};
`

export const NavbarBrand = styled.h1 `
  margin: 0 auto;
`

export const List = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: ${colors.faded} 1px solid;
`

export const FadedListItem = styled(ListItem) `
  color: lightgray;
  filter: grayscale(1);
`

export const CurrentTimer = styled.section `
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const CurrentTimerTitle = styled.h1 `
  flex: 1 100%;
`