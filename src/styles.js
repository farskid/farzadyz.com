import styled, { createGlobalStyle } from "styled-components";

// Global styles
export const Global = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    background-color: #fff;
  }

  a {
    text-decoration: none;
  }
  a:visited {
    color: inherit;
  }
`;

export const RoundedImage = styled.img`
  border-radius: 10px;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;

export const Wrapper = styled.section`
  text-align: center;
  max-width: 550px;
  padding: 0 15px;
  margin: 0 auto;
`;
