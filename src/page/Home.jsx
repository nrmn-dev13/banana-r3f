import { Container, TopLeft, BottomLeft, Hamburger } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
        A runtime deconstruction of{" "}
        <a href="https://playful.software">playful.software</a>
        <FontAwesomeIcon icon={faEnvelope} />
        <FontAwesomeIcon icon={faLinkedin} color="red" />
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

