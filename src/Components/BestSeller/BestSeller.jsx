import { useEffect, useState } from "react";
import Heading from "../../Sheard/Heading/Heading";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import Card from "../../Sheard/Card/Card";

const BestSeller = () => {
  const [activeTab, setActiveTab] = useState("dress");
  const axiosPublic = usePublicAxios();
  const [categoris, setCategoris] = useState([]);
  const [dress, setDress] = useState([]);
  useEffect(() => {
    const res = axiosPublic.get("/product/dress").then((res) => {
      setDress(res.data);
    });
  }, [axiosPublic]);
  const handleTabClick = async (tabId) => {
    setActiveTab(tabId);
    const category = await axiosPublic.get(`/product/${tabId}`);
    setCategoris(category.data);
  };

  return (
    <div className="w-5/6 mx-auto">
      <Heading title={"BEST SELLER"} text={"Top sale in this week"}></Heading>

      <div>
        <div className="my-10 buttons text-center border-b-2 border-[#01bad4] pb-2">
          <button
            className={
              activeTab === "dress"
                ? "active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick("dress")}
          >
            <p className="uppercase"> Best Sell</p>
          </button>
          <button
            className={
              activeTab === "shoes"
                ? " active-tab rounded-3xl border-2  border-black  "
                : ""
            }
            onClick={() => handleTabClick("shoes")}
          >
            <p className="uppercase"> shoes</p>
          </button>
          <button
            className={
              activeTab === "tops"
                ? "active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick("tops")}
          >
            <p className="uppercase"> tops</p>
          </button>
          <button
            className={
              activeTab === "caps"
                ? "active-tab rounded-3xl border-2 border-black  "
                : ""
            }
            onClick={() => handleTabClick("caps")}
          >
            <p className="uppercase"> caps</p>
          </button>
        </div>
        <div>
          {activeTab === "dress" && (
            <>
              <div className="grid md:grid-cols-4 gap-2 justify-center ">
                {dress.slice(0, 4).map((product) => (
                  <Card key={product._id} product={product}></Card>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {activeTab === "shoes" && (
            <>
              <div className="grid md:grid-cols-4 gap-2 justify-center w-5/6 mx-auto">
                {categoris.map((product) => (
                  <Card key={product._id} product={product}></Card>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {activeTab === "tops" && (
            <>
              <div className="grid md:grid-cols-4 gap-2 justify-center w-5/6 mx-auto">
                {categoris.map((product) => (
                  <Card key={product._id} product={product}></Card>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          {activeTab === "caps" && (
            <>
              <div className="grid md:grid-cols-4 gap-2 justify-center w-5/6 mx-auto">
                {categoris.map((product) => (
                  <Card key={product._id} product={product}></Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
