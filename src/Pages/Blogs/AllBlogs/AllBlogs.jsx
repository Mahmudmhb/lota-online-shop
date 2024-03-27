import { Link } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs/useBlogs";
import Heading from "../../../Sheard/Heading/Heading";
import { Helmet } from "react-helmet-async";

const AllBlogs = () => {
  const [blogs] = useBlogs();

  return (
    <div className="w-5/6 mx-auto my-20">
      <Helmet title="blogs - lota-online-shop"></Helmet>
      <Heading
        title={"LATES FROM BLOG"}
        text={"The freshest and most exciting news"}
      ></Heading>

      <div className="grid md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <Link to={`/blogdetails/${blog._id}`}>
              <div className="w-[365px] h-52 image-container">
                <img src={blog.banner} alt="" />
              </div>
            </Link>
            <div className="space-y-2 ">
              <Link to={`/blogdetails/${blog._id}`}>
                <h1 className="font-bold lowercase mt-2 duration-500 hover:text-[#01bad4]">
                  {blog.title}
                </h1>
              </Link>
              <p>By admin on {blog.date}</p>
              <p>{blog.headingdescription.slice(0, 100)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
