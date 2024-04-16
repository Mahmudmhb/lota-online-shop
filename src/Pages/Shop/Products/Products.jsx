import { useEffect, useState } from "react";
import Card from "../../../Sheard/Card/Card";
import Heading from "../../../Sheard/Heading/Heading";
import usePublicAxios from "../../../Layout/usePublicAxios/usePublicAxios";
import { Helmet } from "react-helmet-async";
import Bannar from "../../../Sheard/Bannar/Bannar";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  const [newProducts, setNewProducts] = useState("");
  console.log(newProducts);
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

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchProduct = e.target.value;
    console.log(searchProduct);
    const searchFliter = products.filter((item) =>
      item.name.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setNewProducts(searchFliter);
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

        <div className="my-5  md:w-1/2 mx-auto">
          <form onChange={handleSearch}>
            <label className="input input-bordered flex items-center gap-2">
              <input
                name="search"
                type="text"
                className="grow"
                placeholder="Search your product"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
        </div>
        <div className="grid md:grid-cols-4 justify-center gap-4">
          <div className="col-span-1 mx-auto  ">
            <h1 className="text-4xl  border-b-2 border-[#01bad4] mb-6 py-3">
              Categoris List
            </h1>
            <div className="flex md:flex-col  gap-5 justify-start">
              <button
                className="text-xl border-black w-full hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("dress")}
              >
                Dress
              </button>
              <button
                className="text-xl border-black w-full hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("tops")}
              >
                Tops
              </button>
              <button
                className="text-xl border-black w-full hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("shoes")}
              >
                Shoes
              </button>
              <button
                className="text-xl border-black px-5 w-full hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("t-shirt")}
              >
                T-Shirt
              </button>
              <button
                className="text-xl border-black w-full hover:border-[#01bad4] rounded-2xl py-1 border hover:bg-[#01bad4] hover:text-white duration-500"
                onClick={() => HandleCatogory("caps")}
              >
                Caps
              </button>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid md:grid-cols-3 gap-4">
              {newProducts === "" ? (
                <>
                  {products.map((product) => (
                    <Card key={product._id} product={product}></Card>
                  ))}
                </>
              ) : (
                <>
                  {newProducts.map((product) => (
                    <Card key={product._id} product={product}></Card>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
