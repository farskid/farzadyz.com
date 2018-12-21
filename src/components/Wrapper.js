import React from "react";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  /* padding: 0 15px; */
  max-width: 48em;
`;

export const Wrapper = ({ children }) => (
  <StyledWrapper className="wrapper">{children}</StyledWrapper>
);
