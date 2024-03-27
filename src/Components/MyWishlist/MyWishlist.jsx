import Swal from "sweetalert2";
import useWishlist from "../../Hooks/useWishlist/useWishlist";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import Heading from "../../Sheard/Heading/Heading";
import Bannar from "../../Sheard/Bannar/Bannar";

const MyWishlist = () => {
  const [wishlist, refetch] = useWishlist();
  const axiosPublic = usePublicAxios();

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
    const res = await axiosPublic.post("/addtocart", item);
    console.log(res.data);
    if (res.data.message === true) {
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
      <div className="w-5/6 mx-auto my-10">
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
            <h1 className="text-center">No products added to the wishlist</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
