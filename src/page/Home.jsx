import { Container, TopLeft, BottomLeft, Hamburger } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1 className="text-3xl font-bold underline">
          NORMAN
          <br />
          RAMADHAN —
        </h1>
        <p>Software Developer - Frontend</p>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
        </ul> */}
      </TopLeft>
      <BottomLeft>
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
      </BottomLeft>
      {/* <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger> */}
      <VelvetBanana />
    </Container>
  );
}
