import useCart from "../../Hooks/useCart/useCart";
import Heading from "../../Sheard/Heading/Heading";
import Swal from "sweetalert2";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import { useState } from "react";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const axiosPublic = usePublicAxios();
  const [shipping, setShipping] = useState(false);
  const [price, setPrice] = useState();

  const TotalPrice = cart.reduce((price, cart) => price + cart.price, 0);

  const HandleShipping = (item) => {
    setShipping(!shipping);
    const shippingPrice = item;
    var cartPrice = TotalPrice + shippingPrice;
    setPrice(cartPrice);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Remove item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/addtocart/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Removed Your Item`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      }
    });
  };

  return (
    <div className="w-5/6 mx-auto  ">
      <Heading title={"my cart"}></Heading>
      {cart.length ? (
        <>
          <h1 className="text-center">Total Cart: {cart.length}</h1>
          <div className="m-5">
            <div className="overflow-x-auto">
              <table className="table border-2 border-black">
                {/* head */}
                <thead>
                  <tr className="text-xl font-bold border-b-2 border-black text-black ">
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item._id} className="border border-black">
                      <td>
                        <div className="flex  gap-4">
                          <div className="avatar">
                            <div className="  w-20 h-20">
                              <img src={item.image} alt={item.name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>

                      <th>{item.quantity}</th>
                      <td>{item.price}</td>
                      <th className="hover:text-[#01bad4] duration-200 text-2xl">
                        <button onClick={() => handleDelete(item._id)}>
                          X
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:w-1/3 my-5 mx-auto">
              <h1 className="my-5 text-5 font-bold">CART TOTALS</h1>

              <div className="border ">
                <div className="flex justify-between border p-5">
                  <p>Subtotal</p>
                  <p>${TotalPrice}</p>
                </div>
                <div className="flex justify-between border p-5">
                  <p>Shipping</p>
                  <div>
                    <div>
                      <input
                        type="radio"
                        onClick={() => HandleShipping(15)}
                        checked={shipping === true ? "checked" : ""}
                      />
                      <label>
                        Local Pickup: <bdi>$ 15</bdi>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        onClick={() => HandleShipping(0)}
                        checked={shipping === true ? "" : "checked"}
                      />
                      <label> Free Shipping</label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border p-5">
                  <p>Total With Shipping</p>
                  <p>${price}</p>
                </div>
              </div>
              <button className=" duration-500 mt-5 hover:bg-[#01bad4] w-full bg-black text-white rounded-3xl p-2 uppercase font-bold">
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center">No products in the cart.</h1>
        </>
      )}
    </div>
  );
};

export default MyCart;
