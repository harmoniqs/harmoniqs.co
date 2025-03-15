import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "harmoniqs",
  description: "Landing page for Harmoniqs, and the Piccolo.jl project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'About', link: '/about' },
      { text: 'Demo', link: '/demo' }
    ],

    logo: "logo.png",

    socialLinks: [
      { icon: 'github', link: 'https://github.com/harmoniqs/Piccolo.jl' }
    ],
  }
})
