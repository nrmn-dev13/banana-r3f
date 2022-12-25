import WorksItems from "./WorksItems";
import WorksData from "../WorksData";
import { useState } from "react";

const WorksList = () => {
  const [setWorks] = useState(WorksData)
  return (
    <div>
      <h1>Works Lists</h1>
      <WorksItems items={setWorks}/>
    </div>
  );
};

export default WorksList;
