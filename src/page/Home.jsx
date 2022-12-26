import { Container, BottomLeft } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Overlay() {
  return (
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
  );
}
