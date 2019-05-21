import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";

import { rhythm } from "../utils/typography";

const Highlighted = ({ children }) => (
  <span style={{ fontWeight: 700, display: "inline-block" }}>{children}</span>
);

const SocialLink = ({ children, ...props }) => (
  <OutboundLink
    style={{
      fontWeight: 700,
      color: " #282828",
      display: "inline-block",
      margin: "0 5px",
      textDecoration: "underline",
      boxShadow: "none"
    }}
    {...props}
  >
    {children}
  </OutboundLink>
);

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <section
            style={{
              marginBottom: rhythm(2.5)
            }}
          >
            <h1>Howdy! My name is {author}</h1>
            <p>
              I'm a Software engineer working at{" "}
              <a rel="nofollow" href="https://futurice.com">
                <strong>Futurice</strong>
              </a>{" "}
              and living in{" "}
              <span
                style={{
                  fontSize: 40,
                  verticalAlign: "middle",
                  display: "inline-block",
                  lineHeight: 1
                }}
                role="img"
                aria-label="Finland"
              >
                🇫🇮
              </span>
            </p>
            <p>
              I'm interested in <Highlighted>Javascript</Highlighted>,
              <Highlighted>Typescript</Highlighted>,{" "}
              <Highlighted>React</Highlighted>,{" "}
              <Highlighted>React Native</Highlighted>,{" "}
              <Highlighted>Nodejs</Highlighted>,{" "}
              <Highlighted>Serverless</Highlighted>,{" "}
              <Highlighted>GraphQL</Highlighted>,{" "}
              <Highlighted>ReasonML</Highlighted>. Fascinated by{" "}
              <Highlighted>DX Tooling</Highlighted>,
              <Highlighted>Automation</Highlighted>.
              <Highlighted>Public technical speaker</Highlighted>. Passionate
              about <Highlighted>UI Engineering</Highlighted>,{" "}
              <Highlighted>Statecharts</Highlighted> and{" "}
              <Highlighted>Reactivity</Highlighted>.
            </p>
            <p>
              My hobbies consist of Walking, Listening to music for a long time,
              Reading, Watching movies, Playing pool and Football. You can
              actively find me on{" "}
              <SocialLink target="_blank" href="https://twitter.com/farzad_yz">
                Twitter
              </SocialLink>{" "}
              and{" "}
              <SocialLink target="_blank" href="https://medium.com/@farzad_yz">
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
              .
            </p>
          </section>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Bio;
