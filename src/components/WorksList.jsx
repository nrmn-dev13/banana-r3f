import WorksItems from "./WorksItems";
import WorksData from "../WorksData";
import { useState } from "react";

const WorksList = () => {
  const [setWorks] = useState(WorksData)
  return (
    <div className="container mx-auto">
      <WorksItems items={setWorks}/>
    </div>
  );
};

export default WorksList;
