import useUsers from "../../../Hooks/useUsers/useUsers";
import Heading from "../../../Sheard/Heading/Heading";

const AllUsers = () => {
  const [users] = useUsers();

  const handleUpdateUser = async (user) => {
    console.log(user);
  };
  const handleDeleteUser = async (user) => {
    console.log(user);
  };
  return (
    <div className="w-5/6 mx-auto">
      <Heading title={"all users"}></Heading>
      <div>
        <div className="">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th className="text-3xl">
                    {" "}
                    <button onClick={() => handleDeleteUser(user)}>x</button>
                  </th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td className="md:flex gap-2">
                    <button
                      className="text-xl border-black hover:border-[#01bad4] rounded-2xl py-1 px-5 border hover:bg-[#01bad4] hover:text-white duration-500"
                      onClick={() => handleUpdateUser(user)}
                    >
                      Make Admin
                    </button>
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
