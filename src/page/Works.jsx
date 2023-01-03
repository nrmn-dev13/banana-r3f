import { Container } from "./../layout/styles";
import WorksList from "../components/WorksList";
import { motion as m } from "framer-motion";

const Works = () => {
  return (
    <>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <Container>
          <h1>
            WORKS
            <br />
            XYZ —
          </h1>
        </Container>
      </m.section>
      <m.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut"}}
      exit={{ opacity: 0 }}
      className="mt-10 mb-10">
        <WorksList/>
      </m.section>
    </>
  );
};

export default Works;
