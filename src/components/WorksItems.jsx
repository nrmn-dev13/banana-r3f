const WorksItems = (props) => {
  return (
    <div className="grid lg:grid-cols-4 gap-4">
      {props.items.map((item) => (
        <div
          key={item.id}
          className="rounded-xl border-[#ffd863] bg-[#ffd863] overflow-hidden w-full"
        >
          <figure className="max-h-[160px] min-h-[160px] h-full overflow-hidden relative group">
            <img src={item.img} className="h-full w-full object-cover" alt="" />
            {item.link === null ? null : ( // <p className="rounded-full p-2 flex items-center justify-center mx-auto max-w-[50%] w-full pointer-events-none">Unavailable</p>
              <a
                className="rounded-full p-1 flex font-semibold items-center justify-center mx-auto absolute top-2.5 right-2.5 bg-[#ffd863] max-w-[25%] w-full transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-300"
                href={item.link}
                target="_blank"
              >
                Visit
              </a>
            )}
            <a
              className="rounded-full p-1 flex font-semibold items-center justify-center mx-auto absolute top-2.5 left-2.5 bg-[#333333] text-white max-w-[35%] w-full"
              href={item.link}
              target="_blank"
            >
              {item.type}
            </a>
          </figure>
          <div className="p-4">
            <h4 className="font-secondary font-bold text-2xl">{item.title}</h4>
            {/* <h4>Type : {item.type}</h4> */}
            <h4 className="mb-2 text-xl">{item.description}</h4>
            {/* <h4>{item.tech}</h4> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorksItems;
