<script>
  import { onMount } from "svelte";
  import OutBoundLink from "./OutBoundLink.svelte";
  let activeRoute;

  onMount(() => {
    let { pathname } = window.location;
    pathname = pathname.replace(/\//gi, "") || "home";
    const routes = {
      home: "home",
      cv: "cv",
      talks: "talks",
      blog: "blog",
      mentorship: "mentorship",
    };

    // Work for nested routes such as /blog/:slug
    activeRoute =
      routes[Object.keys(routes).find((key) => pathname.startsWith(key))];
  });

  const links = [
    {
      title: "About",
      link: "/",
      routeName: "home",
    },
    {
      title: "CV",
      link: "/cv",
      routeName: "cv",
    },
    {
      title: "Talks",
      link: "/talks",
      routeName: "talks",
    },
    {
      title: "Blog",
      link: "/blog",
      routeName: "blog",
    },
    {
      title: "Mentorship",
      link: "https://mentorcruise.com/mentor/FarzadYousefZadeh/",
      external: true,
      routeName: "mentorship",
    },
  ];
</script>

<nav>
  <ul class="hidden-print">
    {#each links as link}
      <li class="navbar-item">
        {#if link.external}
          <OutBoundLink
            href={link.link}
            class={activeRoute === link.routeName
              ? "navbarActiveLink"
              : undefined}
          >{link.title}</OutBoundLink
          >
        {:else}
          <a
            href={link.link}
            class={activeRoute === link.routeName
              ? "navbarActiveLink"
              : undefined}>{link.title}</a
          >
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    justify-content: center;
  }
  nav {
    margin-bottom: 1.5rem;
  }
  .navbar-item {
    margin: 0 5px;
  }
  .navbarActiveLink {
    color: #000;
    font-weight: 900;
  }
</style>
