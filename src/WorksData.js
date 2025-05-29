import venuerific from "./assets/venuerific.png";
import one4trader from "./assets/one4trader.png";
import klikkapal from "./assets/klikkapal.png";
import nrmn from "./assets/nrmn.png";
import posseidon from "./assets/posseidon.png";
import neo from "./assets/neo.png";

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
    description: 'Revamp for V.2 and create new feature to improve accessibility and user experience.',
    tech: 'HTML, CSS, Javascript',
    link: 'https://www.venuerific.com',
    img: venuerific,
    type: 'Works'
  },
  {
    id: 'w3',
    title: 'Klik Kapal Indonesia',
    description: 'Transform from design into web page and ensure responsive for desktop and mobile device.',
    tech: 'HTML, CSS, Javascript',
    link: null,
    img: klikkapal,
    type: 'Works'
  },
  // {
  //   id: 'w4',
  //   title: 'One4trader',
  //   description: 'A social media app for forex trading.',
  //   tech: 'HTML, CSS, Javascript',
  //   link: null,
  //   img: one4trader,
  //   type: 'Works'
  // },
  {
    id: 'w4',
    title: 'Three.js Ragging Sea',
    description: 'Implement 3d model and create wave using shaders.',
    tech: 'HTML, CSS, Javascript, Three.js, Webpack',
    link: 'https://nrmn-dev13.github.io/ragging_sea/',
    img: posseidon,
    type: 'Experiment'
  },
  {
    id: 'w5',
    title: 'Neo Brutalism Ecommerce',
    description: 'Implement Neo Brutalism style using https://www.neobrutalism.dev/.',
    tech: 'Next.JS Tailwind, Shadcn UI',
    link: 'https://neo-brutalism-ecommerce.vercel.app/',
    img: neo,
    type: 'Experiment'
  }
]

export default WorksData;
