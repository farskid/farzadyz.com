<script>
  import { onMount } from "svelte";

  export let dateString;

  let userLang;

  onMount(() => {
    // get user's specified language from browser
    const getLanguage = () =>
      navigator.userLanguage ||
      (navigator.languages &&
        navigator.languages.length &&
        navigator.languages[0]) ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.systemLanguage ||
      "en";

    userLang = getLanguage();
  });

  $: dateFormatter = (dateString) =>
    userLang
      ? !!Intl
        ? new Intl.DateTimeFormat(userLang, {
            year: "numeric",
            month: "short",
          }).format(new Date(dateString))
        : dateString
      : dateString;
</script>

<span>{dateFormatter(dateString)}</span>
