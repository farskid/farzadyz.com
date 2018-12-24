import React from "react";
import { SiteData, RouteData } from "react-static";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { Navbar } from "./Navbar";

const StyledPageWrapper = styled.div`
  /* 70px is height of navbar */
  padding: 50px 0;
`;

export const PageWrapper = props => (
  <Wrapper>
    <Navbar />
    <StyledPageWrapper>
      <SiteData>
        {siteData => (
          <RouteData>
            {routeData => props.children({ siteData, routeData })}
          </RouteData>
        )}
      </SiteData>
    </StyledPageWrapper>
  </Wrapper>
);

export const PresentationalPageWrapper = props => (
  <Wrapper>
    <Navbar />
    <StyledPageWrapper>{props.children}</StyledPageWrapper>
  </Wrapper>
);
