const WorksItems = (props) => {
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {props.items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border-[#ffd863] bg-[#ffd863] overflow-hidden w-full"
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
              <p className="rounded-full p-2 flex items-center justify-center mx-auto max-w-[50%] w-full pointer-events-none">Unavailable</p>
            ) : (
              <a className="rounded-full p-2 flex items-center justify-center mx-auto border-[#ffffff] border-2 max-w-[50%] w-full hover:bg-white hover:duration-300" href={item.link}>Visit</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksItems;
