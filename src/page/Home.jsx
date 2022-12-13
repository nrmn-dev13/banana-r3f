import { Container, TopLeft, BottomLeft, Hamburger } from "./../layout/styles";
import { VelvetBanana } from "./../layout/VelvetBanana";

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          NORMAN 
          <br />
          RMDHN —
        </h1>
        <p>Software Developer - Frontend</p>
      </TopLeft>
      <BottomLeft>
        A runtime deconstruction of{" "}
        <a href="https://playful.software">playful.software</a>
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
