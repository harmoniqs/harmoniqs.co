import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kestrel Quantum",
  description: "Landing page for Kestrel, and the Piccolo.jl project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Collaborations', link: '/collaborations' },
      { text: 'About', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kestrelquantum/Piccolo.jl' }
    ],
  }
})
