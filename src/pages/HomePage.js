import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import { PageWrapper } from "../components/PageWrapper";

export const RoundedImage = styled.img`
  border-radius: 10px;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
`;

const Title = styled.section``;

const DescriptionContainer = styled.section`
  text-align: left;
`;

const Flag = styled.span`
  font-size: 40px;
  vertical-align: middle;
  display: inline-block;
  line-height: 1;
`;

const Highlighted = styled.span`
  font-weight: 700;
  display: inline-block;
`;

export const SocialLink = styled.a`
  font-weight: 700;
  color: #282828;
  display: inline-block;
  margin: 0 5px;
  text-decoration: underline;
`;

const PageContentContainer = styled.div`
  padding: 0 30px;

  @media (max-width: 30em) {
    padding: 0 15px;
  }
`;

class MainPage extends React.PureComponent {
  /* eslint-disable jsx-a11y/accessible-emoji */
  render() {
    return (
      <PageWrapper>
        {({ siteData, routeData }) => (
          <PageContentContainer>
            <RoundedImage
              size={150}
              src={siteData.avatar}
              alt={siteData.author}
            />
            <Title>
              <h1 style={{ marginBottom: 0 }}>{routeData.welcomeText}</h1>
              <p
                style={{
                  textAlign: "center",
                  position: "relative",
                  margin: "0 auto"
                }}
              >
                I'm a Software engineer living in{" "}
                <Flag role="img" aria-label="Finland">
                  🇫🇮
                </Flag>
              </p>
            </Title>
            <DescriptionContainer>
              <p>
                I'm interested in <Highlighted>Javascript</Highlighted>,
                <Highlighted>Typescript</Highlighted>,{" "}
                <Highlighted>React</Highlighted>,{" "}
                <Highlighted>React Native</Highlighted>,{" "}
                <Highlighted>GraphQL</Highlighted>,{" "}
                <Highlighted>ReasonML</Highlighted> and{" "}
                <Highlighted>Golang</Highlighted>. I'm usually facinated by{" "}
                <Highlighted>Abstract Tooling</Highlighted>,{" "}
                <Highlighted>State management patterns</Highlighted>,{" "}
                <Highlighted>Automation</Highlighted> and
                <Highlighted>Architectural patterns</Highlighted>.
              </p>
              <p>
                My hobbies consist of Walking, Listening to music for a long
                time, Reading, Watching movies, Playing pool and Football. You
                can actively find me on{" "}
                <SocialLink
                  target="_blank"
                  href="https://twitter.com/farzad_yz"
                >
                  Twitter
                </SocialLink>{" "}
                and{" "}
                <SocialLink
                  target="_blank"
                  href="https://medium.com/@farzad_yz"
                >
                  Medium
                </SocialLink>
                . Come say Hi!
              </p>
              <p>
                You can also find me on:
                <SocialLink target="_blank" href="https://github.com/farskid">
                  Github
                </SocialLink>
                <SocialLink
                  target="_blank"
                  href="https://stackoverflow.com/users/2784512/farzad-yz"
                >
                  Stackoverflow
                </SocialLink>
                <SocialLink
                  target="_blank"
                  href="https://www.linkedin.com/in/farzadyz"
                >
                  Linkedin
                </SocialLink>
              </p>
            </DescriptionContainer>
          </PageContentContainer>
        )}
      </PageWrapper>
    );
  }
}

export default hot(module)(MainPage);
