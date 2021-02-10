<script>
  import metadata from "../../content/data/metadata.json";
  import { pick } from "../utils";
  import OutBoundLink from "./OutBoundLink.svelte";
  import splitbee from "@splitbee/web";

  export let talks;
  export let level = 2;

  $: appearances = Object.values(talks)
    .map((t) => {
      return {
        ...t,
        originalTitle: t.title,
        title: t.title.split("@")[0],
        event: `@` + t.title.split("@")[1],
      };
    })
    .reduce(
      (appr, t) => {
        if (t.type === "talk") {
          return { ...appr, talks: appr.talks.concat(t) };
        } else if (t.type === "podcast") {
          return { ...appr, podcasts: appr.podcasts.concat(t) };
        }
      },
      { talks: [], podcasts: [] }
    );

  const pickedSocials = pick(
    metadata.social,
    "github",
    "twitter",
    "medium",
    "linkedin",
    "dev.to",
    "github",
    "stackoverflow"
  );
</script>

{#if level == 2}
  <h2 class="section-title">Social Media</h2>
{:else}
  <h3 class="section-title">Social Media</h3>
{/if}
<div class="spacing-h">
  {#each Object.keys(pickedSocials) as social}
    <OutBoundLink class="text-capitalize" href={metadata.social[social]}
      >{social}</OutBoundLink
    >
  {/each}
</div>
<hr />

{#if level == 2}
  <h2 class="section-title" id="talks">Conference Talks and Meetups</h2>
{:else}
  <h3 class="section-title" id="talks">Conference Talks and Meetups</h3>
{/if}
<ul class="list">
  {#each appearances.talks as talk}<li class="appearance">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line
          x1="7"
          y1="2"
          x2="7"
          y2="22"
        /><line x1="17" y1="2" x2="17" y2="22" /><line
          x1="2"
          y1="12"
          x2="22"
          y2="12"
        /><line x1="2" y1="7" x2="7" y2="7" /><line
          x1="2"
          y1="17"
          x2="7"
          y2="17"
        /><line x1="17" y1="17" x2="22" y2="17" /><line
          x1="17"
          y1="7"
          x2="22"
          y2="7"
        /></svg
      >
      <section>
        <h3 class="appr-title">
          <OutBoundLink href={talk.videoUrl || talk.slidesUrl}
            ><small
              >{talk.title}<span class="appr-event">{talk.event}</span></small
            ></OutBoundLink
          >
        </h3>
        <p class="appr-links">
          {#if talk.slidesUrl}<OutBoundLink href={talk.slidesUrl}
              >Slides</OutBoundLink
            >{/if}
          {#if talk.videoUrl}<OutBoundLink href={talk.videoUrl}
              >Video</OutBoundLink
            >{/if}
        </p>
      </section>
    </li>
  {/each}
</ul>

<hr />

{#if level == 2}
  <h2 class="section-title" id="podcasts">Podcasts</h2>
{:else}
  <h3 class="section-title" id="podcasts">Podcasts</h3>
{/if}
<ul class="list">
  {#each appearances.podcasts as podcast}<li class="appearance">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><circle cx="12" cy="12" r="2" /><path
          d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"
        /></svg
      >
      <section>
        <h3 class="appr-title">
          <OutBoundLink href={podcast.url}
            ><small
              >{podcast.title}<span class="appr-event">{podcast.event}</span
              ></small
            ></OutBoundLink
          >
        </h3>
        <p class="appr-links">
          {#if podcast.audioUrl}<audio
              on:click={() => {
                splitbee.track("play_podcast", {
                  podcast: podcast.originalTitle,
                });
              }}
              class="hidden-print"
              preload="none"
              src={podcast.audioUrl}
              controls
            />{/if}
        </p>
      </section>
    </li>{/each}
</ul>

<hr />

{#if level == 2}
  <h2 class="section-title" id="others">Others</h2>
{:else}
  <h3 class="section-title" id="others">Others</h3>
{/if}
<ul class="list">
  <li class="appearance appearance-wide">
    <img
      width="100"
      src="https://static.packt-cdn.com/products/9781838641443/cover/smaller"
      alt="Learn React Hooks by Daniel Bugl published
      by Packt publications"
    />
    <section>
      <h3 class="appr-title">
        <small
          >Technical reviewer of the book <em>Learn React Hooks</em><span
            class="appr-event"
            >by Daniel Bugl published by Packt publications</span
          ></small
        >
      </h3>
      <p class="appr-links">
        <OutBoundLink
          href="https://www.goodreads.com/book/show/48611191-learn-react-hooks#other_reviews"
          >Goodreads</OutBoundLink
        >
        <OutBoundLink
          href="https://www.packtpub.com/product/learn-react-hooks/9781838641443"
          >Packt</OutBoundLink
        >
      </p>
    </section>
  </li>
</ul>

<style>
  .list {
    list-style: none;
  }

  .appearance {
    display: grid;
    grid-template-columns: 25px 1fr;
    gap: 0 1rem;
  }

  .appearance-wide {
    grid-template-columns: 100px 1fr;
  }

  .appearance + .appearance {
    margin-top: 1.5rem;
  }

  .appearance svg {
    margin-top: 0.5rem;
  }

  .appr-title {
    margin: 0;
    text-align: left;
  }

  .appr-title > :global(a) {
    text-decoration: none;
  }

  .appr-event {
    display: block;
    color: var(--text-secondary);
    font-size: 0.8em;
    font-weight: normal;
    margin-top: 0.5rem;
  }

  .appr-links {
    margin-top: 0.75rem;
  }

  .appr-links > :global(a + a) {
    margin-left: 0.5rem;
  }

  :global(.appearance audio) {
    display: block;
    width: 100%;
  }
</style>
