<script>
  import metadata from "../../content/data/metadata.json";
  import { rhythm } from "../utils/typography";
  import { onMount } from "svelte";

  import Layout from "../components/Layout.svelte";
  import CVSection from "../components/CVSection.svelte";
  import JobExperience from "../components/JobExperience.svelte";

  let doPrint = () => {
    console.log("noop print");
  };

  onMount(() => {
    doPrint = () => {
      console.log("print called");
      window.print();
    };
  });
</script>

<Layout title="CV | {metadata.siteTitle}">
  <div class="download-bar">
    <button
      style="padding: {rhythm(1 / 3)} {rhythm(1 / 2)}; font-size: {rhythm(
        2 / 3
      )}"
      class="download-button hidden-print download-button"
      on:click={doPrint}> Download My CV </button>
  </div>

  <!-- Sections -->
  <CVSection title="My Tech">
    <p>
      Software Engineering, Javascript, Typescript, React, React Native, NodeJS,
      Restful services, serverless, Redux, FSM and Statecharts. GraphQL, Elm and
      ReasonML are into my Radar.
    </p>
  </CVSection>
  <CVSection title="SKILLS">
    <p>
      <strong>Languages:</strong> J​avascript, Typescript, ReasonML (beginner), Elm
      (beginner) Golang (beginner), HTML, CSS
    </p>
    <p>
      <strong>Web Development Technologies:</strong> React, React Native, Redux,
      Mobx, Xstate, Nodejs, Express, AWS cloud services, Restful services, GraphQL,
      Gatsby, Angularjs, Firebase, Jest, Babel, Webpack, Styled Components, Sass/Scss,
      Rxjs, CI systems, Docker, Redis, RabbitMQ
    </p>
    <p>
      <strong>Mobile Development:</strong> React Native (Android and iOS), Cordova
      (Ionic, Phonegap), Flutter (willing to learn)
    </p>
    <p><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, DynamoDB</p>
    <p>
      <strong>Others:</strong> TDD, Heroku, Netlify, Git, Git Flow, WebSockets, Continuous
      Delivery, Continuous Integration, Design Patterns, Pair Programming, Agile
    </p>
    <p>
      <strong>Soft skills:</strong> Very Good at communication, International Technical
      Speaker, Team player, Open Sourcerer , Technical Blogger.
    </p>
    <p>
      Currently looking into ​Distributed Systems, Microservices, Serverless,
      Software Architectures and Functional Reactive Programming.
    </p>
  </CVSection>
  <CVSection title="EDUCATION">
    <p>
      BSc in Aerospace Engineering, Sharif University of Technology in Tehran
    </p>
    <p>Python programming, Duke University</p>
  </CVSection>
  <CVSection title="PROFESSIONAL EXPERIENCE">
    <JobExperience
      position="Senior Software engineer at Futurice"
      date="Nov 2018 - Present"
    >
      <p>
        Full-stack engineering on Frontend, Backend, Cloud and Mobile using
        Javascript, Typescript, Restful services, GraphQL, AWS, serverless and
        Nodejs.
      </p>
      <p>
        Employer and personal branding by constructing and giving technical
        talks at internal events, meetups and conferences.
      </p></JobExperience
    >
    <JobExperience
      position="Senior Software Engineer at Smarp"
      date="May 2018 - Nov 2018"

      ><p>Using Angularjs and React</p>
      <p>
        Maintaining a legacy product (Social Network) and Developing the new
        product, migrating logical parts.
      </p>
      <p>Migrate legacy code into new codebase (React, Redux, Webpack)</p>
      <p>
        Create API Client abstraction on top of Smarp’s core API to handle API
        data models, data interfaces, custom data selectors/transformers,
        Testability
      </p>
      <p>
        Refactoring proposal for i18n mechanism on the web and mobile clients on
        Smarp product
      </p>
      <p>New notification system into an Event sourcing mechanism</p>
      <p>
        Proposal for the new design system, working tightly with Design and UX
        team for better E2E and integration testing coverage, solid design
        components, documentation, and right abstractions.
      </p>
      <p>Scrum, Kanban, Agile values, Teamwork, Internal tech events</p>
      <p>Project manager of Engineering blog</p>
      <p>A member of hiring process</p></JobExperience
    >
    <JobExperience
      position="[CONTRACT]​ ​Lead Javascript Engineer and Consultant at Beeptunes"
      date="​Oct 2017 - May 2018"
      responsibilities={[
        "Tech leading and developing on a shared mobile-web React application (similar to Spotify), meant to play and stream audio tracks, albums, artists.",
        "Written in React and Redux, uses a core package which shares logic and components - between React and, React Native, and probably Electron (in future). Uses modern Javascript development environment.",
        "Teaching React, Redux, Modern Javascript and Testing best practices to the tech team.",
      ]}
    />
    <JobExperience
      position="Senior Frontend Engineer at Talos Digital"
      date="Jul 2017 - May 2018"
      responsibilities={[
        "Maintaining the US and Mexican based company's online digital service for managing the whole Real Estate industry including All the legal access roles, legal document management, and legal process audit",
        "AngularJS, PhantomJS, Karma, Jasmine.",
        "Passenger1 flight and accommodation booking system using React, Redux, Firebase, Jest, and Enzyme.",
        "Agile, Scrum",
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
        "A member of the hiring process.",
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
        "A member of the hiring process.",
      ]}
    />
  </CVSection>
  <CVSection title="Talks">
    <!-- <TalksList talks={require("../talks/index.json")} /> -->
  </CVSection>
  <CVSection title="Contributions">
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/davidkpiano/xstate">
          <strong> XState: Statecharts implementation in Javascript </strong>
        </a>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/statecharts/xstate-viz">
          <strong>Xstate Visualizer</strong>
        </a>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/rgommezz/react-native-offline">
          <strong>React Native Offline</strong>
        </a>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/farskid/a11y">
          <strong>Automated accessibility tests</strong>
        </a>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/paypal/accessible-html5-video-player">
          <strong>Paypal universal video player</strong>
        </a>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/renatorib/react-powerplug">
          <strong>React power-plug</strong>
        </a>{" "}
        Headless statefull declarative react components to manage side effects
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/rofrischmann/alveron">
          <strong>Alveron (old: React woodworm)</strong>
        </a>{" "}
        Elm &amp; Reason inspired state management for React
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a rel="nofollow" target="_blank" href="https://carbon.now.sh">
          <strong>Carbon</strong>
        </a>{" "}
        Online code screenshots tooling
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/nozzle/react-static">
          <strong>React Static</strong>
        </a>{" "}
        A progressive static site generator for React
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/glennreyes/graphpack">
          <strong>GraphPack</strong>
        </a>{" "}
        A minimalistic zero-config GraphQL server
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a
          rel="nofollow"
          target="_blank"
          href="https://github.com/lhandel/react-native-card-flip">
          <strong>React native card flip</strong>
        </a>{" "}
        Card flip animation for React Native
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a rel="nofollow" target="_blank" href="https://pullrequest.ir">
          <strong>Co-created open source Persian technical blog</strong>
        </a>{" "}
        <em>PullRequest.ir</em>
      </span>
    </p>
    <p>
      <span class="contrib-block">
        <a rel="nofollow" target="_blank" href={metadata.social.stackoverflow}>
          <strong>
            Active member on Stackoverflow with 1600+ reputation
          </strong>
        </a>
      </span>
    </p></CVSection
  >
</Layout>

<style>
  :global(body) {
    @media print {
      @page {
        size: auto;
        margin: 0mm;
      }

      .job-experience {
        box-shadow: none !important;
        border: none !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
    }
  }

  :global(.job-experience) {
    margin-bottom: 3rem;
    margin-top: 3rem;
    border: 1px solid rgb(238, 238, 238);
    padding: 1.5rem;
    border-radius: 0.375rem;
    box-shadow: rgb(238 238 238) 0px 0px 20px 2px;
  }

  .download-bar {
    display: flex;
    justify-content: flex-end;
  }

  .download-button {
    color: #1b95e0;
    border-color: currentColor;
    cursor: pointer;
    border: 1px solid;
    border-radius: 3px;
    text-decoration: none;
    white-space: nowrap;
    text-transform: uppercase;
    background-color: #fff;
    color: rgb(44, 55, 62);
    border-color: rgb(44, 55, 62);
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    .download-button {
      width: 100%;
    }
  }

  .contrib-block {
    display: block;
    margin-bottom: var(--rhythm) / 2;
  }
</style>
