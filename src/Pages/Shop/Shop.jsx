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
