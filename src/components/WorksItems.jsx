const WorksItems = (props) => {
  return (
    <ul className="grid lg:grid-cols-3 gap-4">
      {props.items.map((item) => (
        <li
          key={item.id}
          className="rounded-xl border-[#ffd863] bg-[#ffd863] overflow-hidden"
        >
          <figure>
            <img src={item.img} alt="" />
          </figure>
          <div className="p-4">
            <h4 className="font-secondary font-bold text-lg">{item.title}</h4>
            {/* <h4>Type : {item.type}</h4> */}
            <h4 className="mb-2">{item.description}</h4>
            {/* <h4>{item.tech}</h4> */}
            {item.link === null ? (
              <p>Unavailable</p>
            ) : (
              <a href={item.link}>Visit</a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default WorksItems;
