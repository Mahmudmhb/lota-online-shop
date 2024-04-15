import React, { useEffect, useState } from "react";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import Heading from "../../Sheard/Heading/Heading";

const AllOrders = () => {
  const axiosPublic = usePublicAxios();
  const [allOders, setAllOders] = useState([]);
  useEffect(() => {
    const res = axiosPublic
      .get("/addtocart")
      .then((res) => setAllOders(res.data));
  }, [axiosPublic]);
  console.log(allOders);
  return (
    <div className="w-5/6 mx-auto my-10">
      <Heading title={"all orders"}></Heading>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>Sl</th>
                <th>Product</th>
                <th>Customer</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {allOders.map((orders, idx) => (
                <tr key={orders._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={orders.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{orders.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {orders.useName}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {orders.userEmail}
                    </span>
                  </td>
                  <td>{orders.quantity}</td>
                  <td>{orders.price}</td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
