import { Container } from "./../layout/styles";
import avatar from "../assets/avatar.jpg";

const About = () => {
  return (
    <>
      <section>
        <Container>
          <h1>
            ABOUT
            <br />
            ME —
          </h1>
        </Container>
      </section>
      <section className="flex-auto items-center">
        <div className="w-3/4 mx-auto flex items-center border-2 mt-10 rounded-xl p-5 border-[#ffd863] bg-[#ffd863]">
          <figure className="w-60 h-60 rounded-full overflow-hidden flex-[0_0_auto] mr-5">
            <img src={avatar} alt="avatar" />
          </figure>
          <div>
            <p>
              Hello my name is Norman and I've been a Frontend Developer for
              about four years. 
            </p>
            <p>
              My past projects mostly do some revamp website and slicing form design to web
              pages, and currently I'm working with Vue.js using micro
              frontend architecture and Jest for unit testing.
            </p>
            <p>
              Skills: HTML, CSS, Javascript, Vue.js, Jquery, Bootstrap,
              Tailwind, Jest.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
