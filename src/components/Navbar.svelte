<script>
  import { onMount } from "svelte";
  let activeRoute;

  onMount(() => {
    let { pathname } = window.location;
    pathname = pathname.replace(/\//gi, "") || "home";
    const routes = {
      home: "home",
      cv: "cv",
      talks: "talks",
      blog: "blog",
      tweets: "tweets",
    };

    // Work for nested routes such as /blog/:slug
    activeRoute =
      routes[Object.keys(routes).find((key) => pathname.startsWith(key))];
  });
</script>

<nav>
  <ul class="hidden-print">
    <li class="navbar-item">
      <a
        href="/"
        class={activeRoute === "home" ? "navbarActiveLink" : undefined}>About</a
      >
    </li>
    <li class="navbar-item">
      <a
        href="/cv"
        class={activeRoute === "cv" ? "navbarActiveLink" : undefined}>CV</a
      >
    </li>
    <li class="navbar-item">
      <a
        href="/talks"
        class={activeRoute === "talks" ? "navbarActiveLink" : undefined}
        >Talks</a
      >
    </li>
    <li class="navbar-item">
      <a
        href="/blog"
        class={activeRoute === "blog" ? "navbarActiveLink" : undefined}>Blog</a
      >
    </li>
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
