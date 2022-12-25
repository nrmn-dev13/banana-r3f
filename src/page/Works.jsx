import { Container } from "./../layout/styles";
import WorksList from "../components/WorksList";
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
        <WorksList/>
      </section>
    </>
  );
};

export default Works;
