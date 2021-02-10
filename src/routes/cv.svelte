<script context="module">
  export function preload() {
    return this.fetch(`appearances.json`)
      .then((r) => r.json())
      .then((talks) => {
        return { talks };
      });
  }
</script>

<script>
  import metadata from "../../content/data/metadata.json";
  import cvInfo from "../../content/data/cv.json";
  import { onMount } from "svelte";
  import { separateByAt } from "../utils";
  import splitbee from "@splitbee/web";

  import Layout from "../components/Layout.svelte";
  import CVSection from "../components/CVSection.svelte";
  import JobExperience from "../components/JobExperience.svelte";
  import Appearances from "../components/Appearances.svelte";

  let { jobExperiences, skills, my_tech, education } = cvInfo;
  export let talks;

  jobExperiences = jobExperiences.map((job) => {
    const [position, company] = separateByAt(job.title);
    return {
      position,
      company,
      ...job,
    };
  });

  function keyToTitle(key) {
    return key.replace(/_/g, " ");
  }

  let doPrint = () => {
    console.log("noop print");
  };

  onMount(() => {
    doPrint = () => {
      try {
        console.log("print called");
        window.print();
      } catch (err) {
        console.log(err);
      }
    };
  });
</script>

<Layout title="CV | {metadata.siteTitle}">
  <section class="download-bar hidden-print">
    <p>
      Get my latest CV <span
        role="img"
        title="is on the right link"
        aria-label="is on the right link">👉</span
      >
    </p>
    <button
      class="hidden-print button button-outline"
      on:click={doPrint}
      on:click={() => {
        splitbee.track("download_cv");
      }}
    >
      Download My CV
    </button>
  </section>
  <hr />

  <CVSection title="my tech">
    <p>{my_tech.join(" , ")}</p>
  </CVSection>

  <hr />

  <CVSection title="skills">
    {#each Object.keys(skills) as skill}
      <h3 style="text-transform: capitalize; margin-bottom: .5rem;">
        {keyToTitle(skill)}
      </h3>
      <p style="margin-top: 0;">
        {skills[skill].join(" , ")}
      </p>
    {/each}
  </CVSection>

  <hr />

  <CVSection title="education">
    <p>{education.join(" , ")}</p>
  </CVSection>

  <hr />

  <CVSection title="professional experiences">
    <ul class="list-none job-list">
      {#each jobExperiences as job}
        <li>
          <JobExperience
            position={job.position}
            company={job.company}
            date={job.date}
          >
            {job.description}</JobExperience
          >
          <hr />
        </li>
      {/each}
    </ul>
  </CVSection>

  <CVSection title="appearances">
    <ul class="list-none">
      <li><Appearances level={3} {talks} /></li>
    </ul>
  </CVSection>
  <hr />

  <CVSection title="Community contributions and Open Source">
    <ul class="list-none">
      <li>
        <h3>
          Long time StackOverflow contributor <small
            style="white-space: nowrap;padding-left: 1rem;font-weight: normal"
            >with a reputation of: {metadata.stackoverflowReputation}</small
          >
        </h3>
      </li>
      <li>
        <h3>
          Plenty of OS projects I've contributed to in the past
          <small>including but not limited to</small>
        </h3>
        <ul class="list-inline">
          <li>XState,</li>
          <li>XState Visualizer,</li>
          <li>XState.tips,</li>
          <li>React native offline,,</li>
          <li>Automated accessibility tests,</li>
          <li>Paypal universal video player,</li>
          <li>React power-plug,</li>
          <li>Alveron (pre: React woodworm),</li>
          <li>Carbon,</li>
          <li>React Static,,</li>
          <li>Graphpack,</li>
          <li>React native card flip,</li>
          <li>PullRequest.ir,</li>
          <li>React SVG Spinner, Todometer,</li>
          <li>Awesome Talks,</li>
          <li>Ant Design,</li>
          <li>Unfetch,</li>
          <li>Mitt and many more</li>
        </ul>
      </li>
    </ul>
  </CVSection>
</Layout>

<style>
  @media print {
    @page {
      size: auto;
      margin: 0mm;
    }

    :global(a) {
      text-decoration: underline !important;
    }

    :global(.job-experience) {
      border: none !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }

  .download-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .job-list {
    list-style: none;
  }

  .job-list li:first-child {
    margin-top: 2rem;
  }

  .job-list hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
