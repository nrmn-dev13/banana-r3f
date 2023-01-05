import venuerific from "./assets/venuerific.png";
import one4trader from "./assets/one4trader.png";
import klikkapal from "./assets/klikkapal.png";
import nrmn from "./assets/nrmn.png";
import posseidon from "./assets/posseidon.png";

const WorksData = [
  {
    id: 'w1',
    title: 'Personal Website',
    description: 'My minimalist personal website using Vite, React Three Fiber, Tailwind, and Framer Motion.',
    tech: 'HTML, CSS, Javascript, React, R3f, Framer Motion, Vite',
    link: 'https://nrmn.xyz/',
    img: nrmn,
    type: 'Experiment'
  },
  {
    id: 'w2',
    title: 'Venuerific',
    description: 'A marketplace to rent venue for birthday party, after prom, company event and etc.',
    tech: 'HTML, CSS, Javascript',
    link: 'https://www.venuerific.com',
    img: venuerific,
    type: 'Works'
  },
  {
    id: 'w3',
    title: 'Klik Kapal Indonesia',
    description: 'A platform for both ship owner and cargo owner to meet and work together seamlessly.',
    tech: 'HTML, CSS, Javascript',
    link: null,
    img: klikkapal,
    type: 'Works'
  },
  {
    id: 'w4',
    title: 'One4trader',
    description: 'A social media app for forex trading.',
    tech: 'HTML, CSS, Javascript',
    link: null,
    img: one4trader,
    type: 'Works'
  },
  {
    id: 'w5',
    title: 'Three.JS Ragging Sea',
    description: 'Experiment loading 3d model and create wave using shaders.',
    tech: 'HTML, CSS, Javascript, Three.js, Webpack',
    link: 'https://nrmn-dev13.github.io/ragging_sea/',
    img: posseidon,
    type: 'Experiment'
  }
]

export default WorksData;
