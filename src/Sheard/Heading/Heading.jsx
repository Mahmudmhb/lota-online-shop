const Heading = ({ text, title }) => {
  return (
    <div className="text-center my-10">
      <h1 className="text-3xl uppercase text-[#222222] font-bold">
        ----- {title} ------
      </h1>
      <p className="font-libre baskerville italic">{text}</p>
    </div>
  );
};

export default Heading;
