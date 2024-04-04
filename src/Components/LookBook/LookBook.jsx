import "../Categoris/Categoris.css";
const LookBook = () => {
  return (
    <div className="my-20 w-5/6 mx-auto md:flex justify-between gap-3">
      <div className="h-[290px] md:w-[570px] relative  image-container text-center ">
        <img
          src="https://janstudio.net/claue/demo/wp-content/uploads/2016/04/summer-sale.jpg"
          alt=""
          className=""
        />

        <div className="absolute  text-white  top-1/3 left-1/3">
          <h1 className="text-2xl font-bold uppercase">Summer sele</h1>
          <p className="my-3 uppercase md:text-5xl font-extrabold">up to 70%</p>
        </div>
      </div>
      <div className="h-[290px] md:w-[570px] relative image-container text-center ">
        <img
          src="https://janstudio.net/claue/demo/wp-content/uploads/2016/04/lookbook2016.jpg"
          alt=""
          className=""
        />

        <div className="absolute  text-white  top-1/3 left-1/3">
          <h1 className="text-2xl font-bold">LOOKBOOK 2024</h1>
          <p className="my-3">MAKE LOVE THIS LOOK</p>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
