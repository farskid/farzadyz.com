import packageJson from "./package.json";

const { version } = packageJson;

export default {
  getSiteData() {
    return {
      version,
      avatar: `https://s.gravatar.com/avatar/25710181a99650b72a5f43841afcda9e?s=1024`
    };
  },
  getRoutes: async () => [
    {
      path: "/",
      component: "src/pages/HomePage",
      getData: async () => ({
        welcomeText: "Howdy! I'm Farzad."
      })
    },
    {
      path: "/cv",
      component: "src/pages/AboutPage",
      getData: async () => ({
        title: "About Page of website"
      })
    }
  ]
};
