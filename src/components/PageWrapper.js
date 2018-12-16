import React from "react";
import { SiteData, RouteData } from "react-static";
import styled from "styled-components";

const StyledPageWrapper = styled.div`
  /* 70px is height of navbar */
  padding-top: 120px;
`;

export const PageWrapper = ({ children }) => (
  <StyledPageWrapper>
    <SiteData>
      {siteData => (
        <RouteData render={routeData => children({ siteData, routeData })} />
      )}
    </SiteData>
  </StyledPageWrapper>
);
