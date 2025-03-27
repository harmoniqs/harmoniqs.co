<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/andy.jpg',
    name: 'Andy Goldschmidt, PhD',
    title: 'Postdoctoral Researcher, University of Chicago',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  },
  {
    avatar: '/aaron.jpg',
    name: 'Aaron Trowbridge',
    title: 'Staff Research Associate, Robotic Exploration Lab, CMU',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  },
  {
    avatar: '/jack.jpg',
    name: ' Jack Champagne',
    title: 'Masters of Software Engineering, CMU',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  },
  {
    avatar: '/gennadi.jpg',
    name: 'Gennadi Ryan',
    title: 'Bachelors in Computer Science + Math, Univeristy of Pittsburgh',
    // links: [
    //   { icon: 'github', link: 'https://github.com/yyx990803' },
    //   { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    // ]
  }
]
</script>

# Interested?

<form action="https://formsubmit.co/13e100c060fb2ba7c9ff52d8eeeef119" method="POST">
  <input type="text" name="name" placeholder="Your Name Here" required>
  <input type="email" name="email" placeholder="Your Email Here" required>
  <button type="submit" class="email-submit">Yes!</button>
</form>


# Our Team

<VPTeamMembers size="small" :members="members" />





<!-- <span style="color:transparent;">We are a group of quantum optimal control researchers and software engineers looking to bring the best quantum control software to many prominent quantum hardware platforms.</span> -->

<!-- <span style="color:transparent;">Many of the innovations in modern control techniques, often seen in robotics applications, bear deep relevance to controlling qubits of today's quantum computers. Controlling qubits to apply computational gates with the highest fidelity, shortest time, all while respecting the limits of our hardware requires solving difficult problems. Leveraging trajectory optimization techniques, solutions to these problems can be found and further optimized through expirimentation.</span> -->

<!-- <span style="color:transparent;">Improving the fidelity of gate operations will bring more scalable, fault-tolerant, and possibly error-corrected quantum chips closer to today.</span> -->
