import useUsers from "../../../Hooks/useUsers/useUsers";
import usePublicAxios from "../../../Layout/usePublicAxios/usePublicAxios";
import Heading from "../../../Sheard/Heading/Heading";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [users, refetch] = useUsers();
  const axiosPublic = usePublicAxios();
  const handleUpdateUser = async (user) => {
    const updteUser = {
      email: user.email,
      name: user.name,
      status: "Admin",
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add new Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.put(`/users/${user._id}`, updteUser);
        console.log(res.data);
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Now You are Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      }
    });
  };
  const handleDeleteUser = async (user) => {
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
        const res = await axiosPublic.delete(`/users/${user._id}`);
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
    <div className="w-5/6 mx-auto">
      <Heading title={"all users"}></Heading>
      <h1 className="text-center text-3xl uppercase">
        Total User: <span className="text-[#01bad4]">{users.length}</span>
      </h1>
      <div>
        <div className="">
          <table className="table">
            {/* head */}
            <thead className="text-2xl text-center">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="text-center">
                  <th className="text-3xl ">
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className=" hover:text-[#01bad4] "
                    >
                      x
                    </button>
                  </th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td className="md:flex gap-2 justify-center">
                    {user.status === "Admin" ? (
                      <>
                        <h1 className="text-2xl text-[#01bad4]">
                          {user.status}
                        </h1>
                      </>
                    ) : (
                      <>
                        <button
                          className="text-xl  border-black hover:border-[#01bad4] rounded-2xl py-1 px-5 border hover:bg-[#01bad4] hover:text-white duration-500"
                          onClick={() => handleUpdateUser(user)}
                        >
                          Make Admin
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
