const WorksItems = (props) => {
  return (
    <ul className="grid lg:grid-cols-3 gap-4">
      {props.items.map((item) => (
        <li key={item.id}>
          <figure>
            <img src={item.img} alt="" />
          </figure>
          <h4>Title : {item.title}</h4>
          <h4>Type : {item.type}</h4>
          <h4>Description : {item.description}</h4>
          <h4>Tech Stacks : {item.tech}</h4>
          <h4>Link : {item.link}</h4>
        </li>
      ))}
    </ul>
  );
};

export default WorksItems;
