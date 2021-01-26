<script>
  import metadata from "../../content/data/metadata.json";
  import { rhythm } from "../utils/typography";
  import OutBoundLink from "./OutBoundLink.svelte";
</script>

<section style="margin-bottom: {rhythm(2.5)}">
  <h1>Howdy! My name is {metadata.fullName}</h1>
  <p>
    I'm a Software engineer working at{" "}
    <OutBoundLink rel="nofollow" href="https://epicgames.com">
      <strong>Epic Games</strong>
    </OutBoundLink>{" "}
    and living in{" "}
    <span class="flag" role="img" aria-label="Finland"> 🇫🇮 </span>
  </p>
  <p>
    I'm interested in <span class="highlighted">Javascript</span>,
    <span class="highlighted">Typescript</span>,{" "}
    <span class="highlighted">React</span>,{" "}
    <span class="highlighted">React Native</span>,{" "}
    <span class="highlighted">Nodejs</span>,{" "}
    <span class="highlighted">Serverless</span>,{" "}
    <span class="highlighted">GraphQL</span>,{" "}
    <span class="highlighted">ReasonML</span>. Fascinated by{" "}
    <span class="highlighted">DX Tooling</span> and{" "}
    <span class="highlighted">Automation</span>.{" "}
    <span class="highlighted">
      <a href="/talks">Public technical speaker</a>
    </span>
    . Passionate about <span class="highlighted">UI Engineering</span>,{" "}
    <span class="highlighted">Statecharts</span> and{" "}
    <span class="highlighted">Reactivity</span>.
  </p>
  <p>
    My hobbies consist of Walking, Listening to music for a long time, Reading,
    Watching movies, Playing pool and Football. You can actively find me on{" "}
    <OutBoundLink class="social-link" href={metadata.social.twitter}>
      Twitter
    </OutBoundLink>{" "}
    and{" "}
    <OutBoundLink class="social-link" href={metadata.social.medium}
      >Medium</OutBoundLink
    >
    . Come say Hi!
  </p>
  <p>
    You can also find me on:
    <OutBoundLink class="social-link" href={metadata.social.github}
      >Github</OutBoundLink
    >
    <OutBoundLink class="social-link" href={metadata.social.stackoverflow}
      >Stackoverflow</OutBoundLink
    >
    <OutBoundLink class="social-link" href={metadata.social.linkedin}
      >Linkedin</OutBoundLink
    >
    .
  </p>
</section>

<style>
  .flag {
    font-size: 2.5rem;
    vertical-align: middle;
    display: inline-block;
    line-height: 1;
  }
  .highlighted {
    font-weight: 700;
    display: inline-block;
  }
  /* This will be added to the outboundlink component once rendered */
  :global(.social-link) {
    font-weight: 700;
    display: inline-block;
    color: #282828;
    margin: 0 0.3rem;
    text-decoration: underline;
    box-shadow: none;
  }
</style>
