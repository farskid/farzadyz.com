import React from "react";
import styled from "styled-components";

export const StyledWrapper = styled.div`
  text-align: center;
  max-width: 768px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Wrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);
