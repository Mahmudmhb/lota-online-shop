import Heading from "../../Sheard/Heading/Heading";
import { useEffect, useState } from "react";
import "./Shop.css";
import "../../Components/Categoris/Categoris.css";
import Card from "../../Sheard/Card/Card";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const axiosPublic = usePublicAxios();
  useEffect(() => {
    const handle = async () => {
      const res = await axiosPublic.get("/products");
      setProducts(res.data);
    };
    handle();
  }, [axiosPublic]);

  if (products.length === 0) {
    return (
      <>
        <Heading text={"Top view in this week"} title={"TRENDING"}></Heading>
        <div className="flex justify-center items-center flex-row">
          <div>
            <h1 className="text-center text-3xl text-red-500 min-h-[200px] flex justify-center items-center">
              Loadding..............
            </h1>
            <div className="flex  w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-5/6 mx-auto mt-20">
      <Heading text={"Top view in this week"} title={"TRENDING"}></Heading>
      <div className="grid md:grid-cols-4  gap-4">
        {products.slice(0, 8).map((product) => (
          <Card key={product._id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
