import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";

function Section({ title, texts = [], children }) {
  return (
    <section style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
      <h2>{title}</h2>
      {texts.map((t, index) => (
        <p key={index}>{t}</p>
      ))}
      {children}
      {/* <hr /> */}
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
    const { title, description, social } = data.site.siteMetadata;

    return (
      <Layout
        location={this.props.location}
        title={title}
        avatar={data.avatar}
        author={data.site.siteMetadata.author}
        hasNavbar={true}
      >
        <SEO
          title={title}
          description={description}
          keywords={[
            `farzad yz`,
            `javascript`,
            `react`,
            `redux`,
            `typescript`,
            `nodejs`,
            `reasonml`,
            `elm`,
            `graphql`,
            `golang`,
            `automation`,
            `architecture`,
            `dx`,
            `tooling`,
            `state management`,
            `react native`
          ]}
        />
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
        <Section
          title="SKILLS"
          texts={[
            <>
              <strong>Languages:</strong> J​avascript, Typescript, Golang,
              Python, PHP, HTML, CSS
            </>,
            <>
              <strong>Web Development Technologies:</strong> Node.js, Express,
              AWS, React, Redux, PReact, Gatsby, jQuery, AngularJS, PhantomJS,
              Cypress, Jest, Enzyme, Babel, Webpack, SCSS, GraphQL, Css in JS
              (Styled Components, JSS, Css modules, ...), RXjs, Travis, Jenkins,
              CircleCI, Docker
            </>,
            <>
              <strong>Mobile Development:</strong> React Native (Android and
              iOS), Cordova (Ionic, Phonegap)
            </>,
            <>
              <strong>Databases:</strong> MySQL, SQLite, MongoDB, DynamoDB
            </>,
            <>
              <strong>Others:</strong> TDD, Heroku, Netlify, Now, Cloud, Git,
              Git Flow, RabbitMQ, SQS, WebSockets, Continuous Delivery,
              Continuous Integration, Design Patterns, Pair Programming, Agile
            </>,
            <>
              <strong>Soft skills:</strong> Good at communication, Team player,
              OSS lover, Blogger, willing to talk at meetups and conferences
            </>,
            <>
              Currently looking into ​Distributed Systems, Software
              Architecture, Functional Programming, Reactive Programming
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
              "Working mostly with Javascript, Typescript, ReasonML, Node.js, AWS, React and React Native. "
            ]}
          />
          <JobExperience
            position="Software Engineer at Smarp"
            date="May 2018 - Nov 2018"
            responsibilities={[
              "Using AngularJS and React",
              "Maintaining legacy product and Developing the new product",
              <span>
                Improving Frontend codebase by:
                <span style={{ display: "block", marginTop: rhythm(0.5) }}>
                  <span
                    style={{
                      display: "block",
                      marginTop: rhythm(0.5),
                      paddingLeft: "15px"
                    }}
                  >
                    :: Migrating legacy code into new codebase (React, Redux,
                    RxJS, Webpack)
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: rhythm(0.5),
                      paddingLeft: "15px"
                    }}
                  >
                    :: Creating API Client abstracted on top of Smarp’s core API
                    to handle API data models, data interfaces, custom data
                    selectors/transformers, Testability
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: rhythm(0.5),
                      paddingLeft: "15px"
                    }}
                  >
                    :: Refactoring i18n mechanism for web and mobile clients on
                    Smarp product
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: rhythm(0.5),
                      paddingLeft: "15px"
                    }}
                  >
                    :: Refactoring Smarp notification system into an Event
                    sourcing mechanism
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: rhythm(0.5),
                      paddingLeft: "15px"
                    }}
                  >
                    :: Implementing Smarp’s new Design Language by working
                    tightly with Design and UX team for better E2E and
                    integration testing coverage, solid design components,
                    documentation and right abstractions.
                  </span>
                </span>
              </span>,
              "Scrum, Kanban, Agile values, Teamwork, All nerds tech meetings",
              "Project manager of Engineering blog",
              "A member of hiring process"
            ]}
          />
          <JobExperience
            position="Senior Frontend Engineer at Talos Digital"
            date="Jul 2017 - May 2018"
            responsibilities={[
              "Senior Frontend Engineer at Talos Digital",
              "Code Review / Pair Programming / Agile"
            ]}
          />
          <JobExperience
            position="[CONTRACT]​ ​Lead Javascript Engineer and Consultant at Beeptunes"
            date="​Oct 2017 - May 2018"
            responsibilities={[
              <span>
                Tech leading and developing on a shared mobile-web React
                application (similar to Spotify), meant to play and stream audio
                tracks, albums, artists.
                <span
                  style={{
                    display: "block",
                    marginTop: rhythm(0.5),
                    paddingLeft: "15px"
                  }}
                >
                  :: Written in React and Redux, uses a core package which
                  shares logic and components - between React and React Native,
                  and probably Electron (in future). Uses modern Javascript
                  development environment.
                </span>
              </span>,
              "Teaching React, Redux,Modern Javascript and Testing best practices to the tech team"
            ]}
          />
          <JobExperience
            position="Lead Javascript Engineer and ScrumMaster at PersianGig"
            date="Sep 2016 - Sep 2017"
            responsibilities={[
              `Rewrote multiple cloud services (cloud storage, cloudware) from Dojo Toolkit to
React/Redux. Because of better UX, being responsive for mobile users and increase in performance, our customers grew up to 1 million and 450 thousand. (45% growth)`,
              `Upgraded a direct HTTP upload service to a Node.js, concurrent, chunk enabled uploader. Since the service is more reliable and supports link resumes, drag and drop and folder upload, our upload instances grew up to almost 20,000 instances per day and decreased the number of tickets complaining about failed uploads, hence caused a better situation for our customer support team. (logs indicate a 60% growth in upload usage).`,
              `Write unit tests for FE projects and 80% code coverage to increase consistency and avoid common mistakes. Before that, the codebase didn’t have any.`,
              `Brought Git Flow to the dev team that decreased the number conflicts and increased development speed on FE codebase.`,
              `Gathered a small team of developers to run daily workshops on tech topics such as CI, DevOps, ... to make sure everybody learns as a team.`,
              `Mentored 3 junior FE developers through a solid program (which I designed) and prepare them for team projects.`,
              `Added up a tiny script to Jenkins build flow to cache none-updated assets that decreased FE build duration up to 50%.`,
              `​Integrated upload interface with Android/iOS camera to increase UX.`,
              `Reverse-engineered youtube’s embedding system to reuse it for our services, before that, the service didn’t have such a feature.`,
              `Introduced the FE team to Flow for static typing.`,
              `Came up with an ACL system on projects that helped the company to reuse code base and extend its business model from B2C to B2B that eventually led to a 200,000 Euros contract with the main telecommunication service in Iran called Irancell.`,
              `​Rewrote file preview/download service to Node.js server side rendered pages.`,
              `A member of hiring process.`
            ]}
          />
          <JobExperience
            position="Web Developer at Bertina Co"
            date="31 Dec 2014 - 6 Sep 2016"
            responsibilities={[
              "Developed Employees Portal with AngularJS, a service to manage employees, monitor their activities, request for vacations, etc",
              `Developed Minisite, a service to provide minimal, responsive personal portals with many themes and live management service using AngularJS, jQuery, SCSS`,
              `Developed Chia, an Android application with a gamification approach to learning the English Language, including different levels, payments, live competitions using jQuery, Cordova, Socket.io and Node.js`,
              `Developed Hamkalam, an IM application for Android devices providing an anonymous chat service to public using AngularJS, Node.jS, and MySQL`,
              `Developed CartoonLand, an Android application providing cartoons for kids, streaming online videos with multiple qualities, download manager to cache downloaded videos, user management, IAB for payments using jQuery, Cordova, PHP, MySQL`,
              `Developed multiple enterprises and personal responsive websites using Wordpress, jQuery, AngularJS`,
              `A member of hiring process.`
            ]}
          />
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
                <a href="https://statechart-driven-ui-development.netlify.com/">
                  <strong>Talk: Statechart Driven UI Development</strong>
                </a>{" "}
                A talk about why UI development is hard and how Statecharts can help us with that
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://headless-react.netlify.com/">
                  <strong>Talk: Headless React</strong>
                </a>{" "}
                A talk about Headless React components to boost reusability and
                composability of UI components
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://react-without-react.netlify.com">
                  <strong>Talk: React without React</strong>
                </a>{" "}
                A talk about Using React or any other UI library on development
                and wipe them out on compile time in order to save bundle size
                and a boost in performance on runtime
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://www.youtube.com/watch?v=LujtSjJ6MhY">
                  <strong>Talk on Youtube show SoftwareTalks</strong>
                </a>{" "}
                A talk about TDD
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="https://www.youtube.com/watch?v=fMZUy3oRBw8&amp;t=703s">
                  <strong>Talk on Youtube show SoftwareTalks</strong>
                </a>{" "}
                A talk about <em>State of Frontend development</em>
              </span>
              <span style={{ display: "block", marginBottom: rhythm(0.5) }}>
                <a href="http://coderconf.org/files/farzad-yousefzadeh.mp3">
                  <strong>Talk on CoderConf</strong>
                </a>{" "}
                A talk about{" "}
                <em>State of The life of a software developer in Finland</em>
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
                    Active member on Stackoverflow with 1500+ reputation
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
