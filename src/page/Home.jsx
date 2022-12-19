import { Container, TopLeft, BottomLeft, Hamburger } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          NORMAN
          <br />
          RAMADHAN —
        </h1>
        <p>Software Developer - Frontend</p>
      </TopLeft>
      <BottomLeft>
        Get in Touch: 
        <a className="social-link" href="mailto:normanramadhan3@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a className="social-link" href="https://www.instagram.com/normanrmdhn/">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
        <a className="social-link" href="https://www.linkedin.com/in/nrmnramadhan/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </BottomLeft>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  );
}
