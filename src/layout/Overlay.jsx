import { Container, TopLeft, BottomLeft, Hamburger } from './styles'
import { VelvetBanana } from './VelvetBanana'

export default function Overlay() {
  return (
    <Container>
      <TopLeft>
        <h1>
          LANDING
          <br />
          PAGES —
        </h1>
        <p>In React & Threejs —</p>
      </TopLeft>
      <BottomLeft>
        A runtime deconstruction of <a href="https://playful.software">playful.software</a>
      </BottomLeft>
      <Hamburger>
        <div />
        <div />
        <div />
      </Hamburger>
      <VelvetBanana />
    </Container>
  )
}
