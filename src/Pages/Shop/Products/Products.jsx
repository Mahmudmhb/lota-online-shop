import { useEffect, useState } from "react";
import Card from "../../../Sheard/Card/Card";
import Heading from "../../../Sheard/Heading/Heading";
import usePublicAxios from "../../../Layout/usePublicAxios/usePublicAxios";
import { Helmet } from "react-helmet-async";
import Bannar from "../../../Sheard/Bannar/Bannar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All products");
  const axiosPublic = usePublicAxios();
  useEffect(() => {
    const handle = async () => {
      const res = await axiosPublic.get("/products");
      setProducts(res.data);
    };

    handle();
  }, [axiosPublic]);
  const HandleCatogory = async (category) => {
    const res = await axiosPublic.get(`/product/${category}`);
    setProducts(res.data);
    setCategory(category);
  };
  return (
    <div>
      <Helmet title="shop - lota-online-shop"></Helmet>
      <Bannar
        banner={
          "https://janstudio.net/claue/demo/wp-content/uploads/2016/10/shop-category.jpg"
        }
        title={"Shop All Products"}
        text={"Shop All Products"}
      ></Bannar>
      <div className="w-11/12 mx-auto mt-20 ">
        <Heading title={category}></Heading>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1">
            <h1 className="text-4xl  border-b-2 border-[#01bad4] mb-6 py-3">
              Categoris List
            </h1>
            <div className="flex flex-col gap-5 justify-start">
              <button
                className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("dress")}
              >
                Dress
              </button>
              <button
                className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("tops")}
              >
                Tops
              </button>
              <button
                className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("shoes")}
              >
                Shoes
              </button>
              <button
                className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("t-shirt")}
              >
                T-Shirt
              </button>
              <button
                className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("caps")}
              >
                Caps
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product._id} product={product}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
