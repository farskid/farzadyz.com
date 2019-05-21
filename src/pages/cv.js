import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import { rhythm } from "../utils/typography";
import { SiteHeader } from "../components/SiteHeader";
import { buttons } from "../constants";
import { TalksList } from "./talks";
import "./cv.css";

function Section({ title, texts = [], children }) {
  return (
    <section style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
      <h2>{title}</h2>
      {texts.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
      {children}
    </section>
  );
}

function JobExperience({ position, date, responsibilities }) {
  return (
    <section
      className="job-experience"
      style={{
        marginBottom: rhythm(2),
        marginTop: rhythm(2),
        border: "1px solid #eee",
        padding: rhythm(1),
        borderRadius: rhythm(0.25),
        boxShadow: "rgb(238, 238, 238) 0px 0px 20px 2px"
      }}
    >
      <h3>{position}</h3>
      <h6>{date}</h6>
      {responsibilities.map((r, index) => (
        <p key={index}>{r}</p>
      ))}
    </section>
  );
}

class CV extends React.Component {
  render() {
    const { data } = this.props;
    const {
      site: { siteMetadata },
      avatar
    } = data;
    const { title, description, social, author } = siteMetadata;

    return (
      <Layout title={title} description={description}>
        <Helmet>
          <style type="text/css">
            {`
              @media print {
                @page {
                  size: auto;
                  margin: 0mm;
                }
                .job-experience {
                  box-shadow: none!important;
                  border: none!important;
                  padding-left: 0!important;
                  padding-right: 0!important;
                }
              }
              `}
          </style>
        </Helmet>
        <SiteHeader siteMetadata={siteMetadata} author={author} avatar={avatar}>
          <SiteHeader.Avatar
            avatar={avatar.childImageSharp.fixed}
            author={author}
          />
          <h1>{author}</h1>
          <nav style={{ marginBottom: rhythm(1) }}>
            <SiteHeader.Navbar />
          </nav>
          <div>
            <SiteHeader.Button
              href="mailto:farskid@gmail.com?subject=We'd like to hire you as a consultant"
              color={buttons.black}
            >
              Hire Me as a Consultant
            </SiteHeader.Button>
            <SiteHeader.Button
              href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A8000%2F&amp;amplref_src=twsrc%5Etfw&amp;screen_name=farzad_yz&amp;tw_p=followbutton"
              external={true}
              color={buttons.blue}
            >
              Follow {social.twitterHandle} on Twitter
            </SiteHeader.Button>
          </div>
        </SiteHeader>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              color: buttons.black,
              borderColor: buttons.black,
              padding: `${rhythm(1 / 3)} ${rhythm(1 / 2)}`,
              fontSize: rhythm(2 / 3)
            }}
            className="hidden-print download-button"
            onClick={() => window.print()}
          >
            Download My CV
          </button>
        </div>
        <Section title="My Tech">
          <p>
            Software Engineering, Javascript, Typescript, React, React Native,
            NodeJS, Restful services, serverless, Redux, GraphQL and ReasonML.
          </p>
        </Section>
        <Section
          title="SKILLS"
          texts={[
            <>
              <strong>Languages:</strong> J​avascript, Typescript, ReasonML
              (beginner), Elm (beginner) Golang (beginner), HTML, CSS
            </>,
            <>
              <strong>Web Development Technologies:</strong> React, React
              Native, Redux, Nodejs, Express, AWS cloud services, Restful
              services, GraphQL, Gatsby, Angularjs, Firebase, Jest, Babel,
              Webpack, Styled Components, Sass/Scss, Rxjs, CI systems, Docker,
              Redis, RabbitMQ
            </>,
            <>
              <strong>Mobile Development:</strong> React Native (Android and
              iOS), Cordova (Ionic, Phonegap), Flutter (willing to learn)
            </>,
            <>
              <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB
            </>,
            <>
              <strong>Others:</strong> TDD, Heroku, Netlify, Git, Git Flow,
              WebSockets, Continuous Delivery, Continuous Integration, Design
              Patterns, Pair Programming, Agile
            </>,
            <>
              <strong>Soft skills:</strong> Very Good at communication, Public
              tech speaker at events, meetups and conferences, Team player, Open
              Source , Technical Blogger
            </>,
            <>
              Currently looking into ​Distributed Systems, Microservices,
              Serverless, Software Architectures, Functional Reactive
              Programming
            </>
          ]}
          children={null}
        />

        <Section
          title="EDUCATION"
          texts={[
            `BSc in Aerospace Engineering, Sharif University of Technology in
            Tehran`,
            `Python programming, Duke University`
          ]}
          children={null}
        />

        <Section title="PROFESSIONAL EXPERIENCE">
          <JobExperience
            position="Senior Software engineer at Futurice"
            date="Nov 2018 - Present"
            responsibilities={[
              "Full-stack engineering on Frontend, Backend, Cloud and Mobile using Javascript, Typescript, Restful services, GraphQL, AWS, serverless and Nodejs.",
              "Employer and personal branding by constructing and giving technical talks at internal events, meetups and conferences."
            ]}
          />
          <JobExperience
            position="Senior Software Engineer at Smarp"
            date="May 2018 - Nov 2018"
            responsibilities={[
              "Using Angularjs and React",
              "Maintaining a legacy product (Social Network) and Developing the new product, migrating logical parts.",
              "Migrate legacy code into new codebase (React, Redux, Webpack)",
              "Create API Client abstraction on top of Smarp’s core API to handle API data models, data interfaces, custom data selectors/transformers, Testability",
              "Refactoring proposal for i18n mechanism on the web and mobile clients on Smarp product",
              "New notification system into an Event sourcing mechanism",
              "Proposal for the new design system, working tightly with Design and UX team for better E2E and integration testing coverage, solid design components, documentation, and right abstractions.",
              "Scrum, Kanban, Agile values, Teamwork, Internal tech events",
              "Project manager of Engineering blog",
              "A member of hiring process"
            ]}
          />
          <JobExperience
            position="[CONTRACT]​ ​Lead Javascript Engineer and Consultant at Beeptunes"
            date="​Oct 2017 - May 2018"
            responsibilities={[
              "Tech leading and developing on a shared mobile-web React application (similar to Spotify), meant to play and stream audio tracks, albums, artists.",
              "Written in React and Redux, uses a core package which shares logic and components - between React and, React Native, and probably Electron (in future). Uses modern Javascript development environment.",
              "Teaching React, Redux, Modern Javascript and Testing best practices to the tech team."
            ]}
          />
          <JobExperience
            position="Senior Frontend Engineer at Talos Digital"
            date="Jul 2017 - May 2018"
            responsibilities={[
              "Maintaining the US and Mexican based company's online digital service for managing the whole Real Estate industry including All the legal access roles, legal document management, and legal process audit",
              "AngularJS, PhantomJS, Karma, Jasmine.",
              "Passenger1 flight and accommodation booking system using React, Redux, Firebase, Jest, and Enzyme.",
              "Agile, Scrum"
            ]}
          />
          <JobExperience
            position="Lead Javascript Engineer and ScrumMaster at PersianGig"
            date="Sep 2016 - Sep 2017"
            responsibilities={[
              "Rewrote multiple B2C and B2B cloud services (cloud storage, cloud-ware) from Dojo Toolkit to React and Redux. Because of better UX, being responsive for mobile users and increase in performance, our customers grew up to 1 million and 450 thousand. (45% growth)",
              "Upgraded a direct HTTP upload service to a Node.js, concurrent, chunk enabled uploader. Since the service is more reliable and supports link resumes, drag and drop and folder upload, our upload instances grew up to almost 20,000 instances per day and decreased the number of tickets complaining about failed uploads, hence caused a better situation for our customer support team. (logs indicate a 60% growth in upload usage).",
              "Add testing to projects up to a reasonable code coverage to increase consistency and avoid common mistakes. Before that, the codebase didn’t have any.",
              "Brought Git Flow to the dev team that decreased the number of conflicts and increased development speed on the codebase.",
              "Gathered a small team of developers to run daily workshops on tech topics such as CI, DevOps, ... to make sure everybody learns as a team.",
              "Mentored a junior frontend developer through a solid educational program (which I designed) and prepared them for team projects.",
              "Enhanced the CI pipeline to cache none-updated assets that decreased the frontend build duration up to 50%.",
              "Integrated upload interface with the native camera to increase UX.",
              "Designed and developed an embedding system for cloud-based files.",
              "Came up with an ACL system on projects that helped the company to reuse code base and extend its business model from B2C to B2B that eventually led to a 200,000 Euros contract with the main telecommunication service in Iran called Irancell.",
              "Rewrote file preview/download service to Node.js server-side rendered pages.",
              "A member of the hiring process."
            ]}
          />
          <JobExperience
            position="Web Developer at Bertina Co"
            date="Dec 2014 - Sep 2016"
            responsibilities={[
              "Developed Employees Portal using AngularJS, a service to manage employees, monitor their activities, request for vacations, etc",
              "Developed Minisite, a service to provide minimal, responsive personal portals with many themes and live management service using AngularJS, jQuery, SCSS",
              "Developed Chia, an Android application with a gamification approach to learning the English Language, including different levels, payments, live competitions using jQuery, Cordova, Socket.io and Node.js",
              "Developed Hamkalam, an IM application for Android devices providing an anonymous chat service to the public using AngularJS, Node.jS, and MySQL",
              "Developed CartoonLand, an Android application providing cartoons for kids, streaming online videos with multiple qualities, download manager to cache downloaded videos, user management, IAB for payments using jQuery, Cordova, PHP, MySQL",
              "Developed multiple enterprises and personal responsive websites using Wordpress, jQuery, AngularJS",
              "A member of the hiring process."
            ]}
          />
        </Section>
        <Section title="Talks">
          <TalksList talks={require("../talks/index.json")} />
        </Section>
        <Section
          title="Contributions"
          texts={[
            <span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/paypal/accessible-html5-video-player">
                  <strong>Paypal universal video player</strong>
                </a>
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/renatorib/react-powerplug">
                  <strong>React power-plug</strong>
                </a>{" "}
                Headless statefull declarative react components to manage side
                effects
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/rofrischmann/alveron">
                  <strong>Alveron (old: React woodworm)</strong>
                </a>{" "}
                Elm &amp; Reason inspired state management for React
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://carbon.now.sh">
                  <strong>Carbon</strong>
                </a>{" "}
                Online code screenshots tooling
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/nozzle/react-static">
                  <strong>React Static</strong>
                </a>{" "}
                A progressive static site generator for React
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/glennreyes/graphpack">
                  <strong>GraphPack</strong>
                </a>{" "}
                A minimalistic zero-config GraphQL server
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://github.com/lhandel/react-native-card-flip">
                  <strong>React native card flip</strong>
                </a>{" "}
                Card flip animation for React Native
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://pullrequest.ir">
                  <strong>Co-created open source Persian technical blog</strong>
                </a>{" "}
                <em>PullRequest.ir</em>
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href={social.stackoverflow}>
                  <strong>
                    Active member on Stackoverflow with 1600+ reputation
                  </strong>
                </a>
              </span>
            </span>
          ]}
        />
      </Layout>
    );
  }
}

export default CV;

export const pageQuery = graphql`
  query CVQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        social {
          twitterHandle
          twitter
          github
          linkedin
          medium
          stackoverflow
        }
      }
    }
  }
`;
