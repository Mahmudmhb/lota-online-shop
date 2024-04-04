import Swal from "sweetalert2";
import useWishlist from "../../Hooks/useWishlist/useWishlist";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import Heading from "../../Sheard/Heading/Heading";
import Bannar from "../../Sheard/Bannar/Bannar";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";

const MyWishlist = () => {
  const [wishlist, refetch] = useWishlist();
  const axiosPublic = usePublicAxios();
  const { user } = useAuth();

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
        const res = await axiosPublic.delete(`/wishlist/${id}`);
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

  const handleAddToCart = async (item) => {
    const addCart = {
      name: item.name,
      image: item.image,
      price: item.price,
      productId: item._id,
      quantity: 1,
      useName: user.displayName,
      userEmail: user.email,
    };
    const res = await axiosPublic.post("/addtocart", addCart);
    console.log(res.data);
    if (res.data.insertId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `added to cart from Wishlist`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    refetch();
  };

  return (
    <div>
      <Bannar
        banner={
          "https://janstudio.net/claue/demo/wp-content/uploads/2016/10/shop-category.jpg"
        }
        title={"WISHLIST"}
        text={"View your wishlist products"}
      ></Bannar>
      <div className="w-5/6 mx-auto my-10 text-center">
        <Heading title={"my wishlist"}></Heading>
        {wishlist.length ? (
          <>
            <h1>Total Wishlist: {wishlist.length}</h1>{" "}
            <div className="overflow-x-auto">
              <table className="table text-center">
                {/* head */}
                <thead>
                  <tr className="text-xl font-bold text-black text-center">
                    <th></th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((item) => (
                    <tr key={item._id}>
                      <th>
                        <button onClick={() => handleDelete(item._id)}>
                          X
                        </button>
                      </th>
                      <td>
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="  w-20 h-20">
                              <img src={item.image} alt={item.name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.price}</td>
                      <th>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className=" w-40 bg-[#01bad4] text-white rounded-3xl p-2 uppercase font-bold"
                        >
                          Add to Cart
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <h1 className=" flex items-center justify-center w-full h-20 bg-[#d9edf7]">
              No products added to the wishlist
            </h1>
            <Link to="/shop">
              <button className="border-2 my-5 text-xl border-black hover:text-white duration-300 hover:bg-[#01bad4] hover:border-[#01bad4]  rounded-2xl py-2 px-5 text-center">
                Return to shop
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
