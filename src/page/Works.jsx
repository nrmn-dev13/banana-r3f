import { Container } from "./../layout/styles";
import ciindi from "../assets/ciindi.png";
const Works = () => {
  return (
    <>
      <section>
        <Container>
          <h1>
            WORKS
            <br />
            XYZ —
          </h1>
        </Container>
      </section>
      <section>
        <div>
          <div>
            <figure>
              <img src={ciindi} alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
