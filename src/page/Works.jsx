import { Container } from "./../layout/styles";
import WorksList from "../components/WorksList";

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
      <section className="mt-10 mb-10">
        <WorksList/>
      </section>
    </>
  );
};

export default Works;
