import { Container, BottomLeft } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion as m } from "framer-motion";

export default function Overlay() {
  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <h1>
          NRMN
          <br />
          RMDHN —
        </h1>
        <p>Software Developer - Frontend</p>
        <BottomLeft>
          <div>
            Get in Touch:
            <a className="social-link" href="mailto:normanramadhan3@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className="social-link"
              href="https://www.instagram.com/normanrmdhn/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/nrmnramadhan/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          Inspired by: https://playful.software/
        </BottomLeft>
        <VelvetBanana />
      </Container>
    </m.section>
  );
}
