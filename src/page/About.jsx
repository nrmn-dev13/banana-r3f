import { Container } from "./../layout/styles";
import avatar from "../assets/avatar.jpg";
import { motion as m } from "framer-motion";

const About = () => {
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <h1>
            ABOUT
            <br />
            ME —
          </h1>
        </Container>
      </m.section>
      <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }} 
      exit={{ opacity: 0 }}
      className="flex-auto items-center mt-10"
      >
        <div className="lg:w-3/4 mx-auto flex items-center flex-wrap lg:flex-nowrap border-2 rounded-xl p-5 border-[#ffd863] bg-[#ffd863]">
          <figure className="w-60 h-60 mx-auto rounded-full overflow-hidden flex-[0_0_auto] mb-5 lg:mr-5 lg:mb-0">
            <img src={avatar} alt="avatar" />
          </figure>
          <div>
            <p className="text-xl">
              Hello my name is Norman and I've been a Frontend Developer for
              about four years. My past projects mostly do some revamp website
              and slicing form design to web pages, and currently I'm working
              with Vue.js using micro frontend architecture and Jest for unit
              testing.
            </p>
            <br />
            <p className="text-xl">
              Skills: HTML, CSS, Javascript, Vue.js, Jquery, Bootstrap,
              Tailwind, Jest.{" "}
            </p>
          </div>
        </div>
      </m.section>
      {/* <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }} 
      exit={{ opacity: 0 }}
      className="flex-auto items-center mt-10"
      >
        <a href="https://drive.google.com/file/d/1NunuqOvFdG2Q99UuTlT7FoIsiJXtNjDx/view?usp=sharing" target="_blank">Download</a>
      </m.section> */}
    </>
  );
};

export default About;
