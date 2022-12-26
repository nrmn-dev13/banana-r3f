import WorksItems from "./WorksItems";
import WorksData from "../WorksData";
import { useState } from "react";

const WorksList = () => {
  const [setWorks] = useState(WorksData)
  return (
    <div>
      <WorksItems items={setWorks}/>
    </div>
  );
};

export default WorksList;
