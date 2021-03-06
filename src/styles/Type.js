import { css, createGlobalStyle } from 'styled-components'
import 'focus-visible'

import * as Breakpoints from './Breakpoints'
import * as Colors from './Colors'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"
export const fontFace = `'Jost', ${sansSerifFallback}`
export const monospace = "Menlo, Monaco, 'Courier New', monospace"

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 'bold'
}

export const body = css`
  font-size: 14px;

  @media(min-width: ${Breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const header1 = css`
  font-size: 48px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 28px;
    line-height: 122%;
  }
`

export const header3 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.bold};
  margin: 0;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 20px;
    line-height: 138%;
  }
`

export const header4 = css`
  font-size: 24px;
  line-height: 152%;
  font-weight: ${fontWeights.medium};
  margin: 0;

  @media(max-width: ${Breakpoints.mobile}) {
    font-size: 20px;
    line-height: 138%;
  }
`

export const GlobalType = createGlobalStyle`
  body {
    ${body};
    font-family: ${fontFace};
  }

  h1 {
    ${header1};
  }

  h3 {
    ${header3};
  }

  h4 {
    ${header4};
  }

  p {
    margin: 0;
  }

  a {
    transition: all 300ms ease;
    color: ${Colors.blue60};
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${Colors.glow20};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${Colors.glow20};
      border-radius: 4px;
    }

    &:focus:not(.focus-visible) {
      outline: none;
      box-shadow: none;
    }
  }
`
