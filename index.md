---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Piccolo.jl"
  text: "from Harmoniqs"
  tagline: fine tuned quantum control inspired by robotics
  image:
    src: /logo.png
    alt: Harmoniqs
  actions:
    - theme: brand
      text: See the docs
      link: https://docs.harmoniqs.co/
    - theme: alt
      text: Demos
      link: /demo.html
    - theme: alt
      text: Research
      link: /collaborations.html
    - theme: alt
      text: Get connected!
      link: /about.html#interested

features:
  - title: Piccolo.jl
    link: "https://github.com/harmoniqs/Piccolo.jl"
    details: Meta-package for Piccolo quantum optimal control optimization and utilities
  - title: NamedTrajectories.jl
    link: "https://github.com/harmoniqs/NamedTrajectories.jl"
    details: Efficient storage and handling of trajectories for large state and control optimization
  - title: PiccoloQuantumObjects.jl
    link: "https://github.com/harmoniqs/PiccoloQuantumObjects.jl"
    details: Common quantum objects, isomophisms, and indexing used across the Piccolo.jl ecosystem
  - title: DirectTrajOpt.jl
    link: "https://github.com/harmoniqs/DirectTrajOpt.jl"
    details: Direct trajectory optimization library written in Julia, dependent on non-linear program solvers, written by us, used by us!
---
