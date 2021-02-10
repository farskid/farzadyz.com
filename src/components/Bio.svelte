<script>
  import metadata from "../../content/data/metadata.json";
  import OutBoundLink from "./OutBoundLink.svelte";
</script>

<section>
  <h1>Howdy! My name is {metadata.fullName}</h1>
  <p>
    I'm a Software engineer working at
    <OutBoundLink href="https://epicgames.com">
      <strong>Epic Games</strong>
    </OutBoundLink>
    and living in
    <span class="flag" role="img" title="Finland" aria-label="Finland">
      🇫🇮
    </span>
  </p>
  <p>
    I'm interested in <strong>Javascript</strong>,
    <strong>Typescript</strong>,
    <strong>React</strong>,
    <strong>React Native</strong>,
    <strong>Nodejs</strong> and
    <strong>Serverless</strong>. Fascinated by
    <strong>DX Tooling</strong> and
    <strong>Automation</strong>.
  </p>
  <p>
    <strong>
      <a href="/appearances#talks">Public technical speaker</a>
    </strong>
    . Passionate about <strong>UI Engineering</strong>,
    <strong>Statecharts</strong> and
    <strong>Reactivity</strong>.
  </p>
  <p>
    My personal hobbies include going for long walks, music, movies, book
    reading, book binding and a set of activities such as Hiking, Football,
    Badminton, Squash, Fustal, Ping pong and Volleyball. I do also like video
    games specially the platforming genre. My favourite video game is <em
      >Hollow Knight</em
    >.
  </p>
  <p>
    You can actively find me on
    <OutBoundLink class="social-link" href={metadata.social.twitter}>
      <strong>Twitter</strong>
    </OutBoundLink>. Come say Hi!
  </p>
  <p class="spacing-h spacing-small">
    You can also find me on:
    <OutBoundLink class="social-link" href={metadata.social.github}
      ><strong>Github</strong></OutBoundLink
    >
    <OutBoundLink class="social-link" href={metadata.social.stackoverflow}
      ><strong>Stackoverflow</strong></OutBoundLink
    >
    <OutBoundLink class="social-link" href={metadata.social.linkedin}
      ><strong>Linkedin</strong></OutBoundLink
    >
    <OutBoundLink class="social-link" href={metadata.social.medium}
      ><strong>Medium</strong></OutBoundLink
    >
    .
  </p>
</section>

<style>
  .flag {
    font-size: 1.5rem;
    vertical-align: middle;
    display: inline-block;
    line-height: 1;
  }
</style>
