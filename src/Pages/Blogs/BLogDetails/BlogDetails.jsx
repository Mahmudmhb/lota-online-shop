import { Link, useParams } from "react-router-dom";
import usePublicAxios from "../../../Layout/usePublicAxios/usePublicAxios";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import Heading from "../../../Sheard/Heading/Heading";
import Marquee from "react-fast-marquee";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import useBlogs from "../../../Hooks/useBlogs/useBlogs";

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const [blogs] = useBlogs();
  const { id } = useParams();
  console.log(id);
  const axiosPublic = usePublicAxios();
  useEffect(() => {
    const res = axiosPublic.get(`/blogs/${id}`).then((res) => {
      setBlog(res.data);
    });
  }, [axiosPublic, id]);
  const shareUrl = "http://github.com";
  const title = "GitHub";
  return (
    <div className="">
      <div
        className="h-52 bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${blog.banner})` }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className=" text-center absolute top-1/3 left-[40%] text-white">
          <div className="space-y-3">
            <h1 className=" font-bold">{blog.title}</h1>
            <p className="">{blog.date}</p>
            <p className="">{blog.category}</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 w-5/6 mx-auto my-20 gap-5">
        <div className="col-span-2">
          <h1>{blog.headingdescription}</h1>

          <div className="bg-[#f1f1f1] relative my-5">
            <h1 className="font-libre baskerville italic p-12 ">
              {blog.imageDescription}
            </h1>
            <FaQuoteLeft className="text-3xl top-8 absolute left-4" />
          </div>
          <Heading title={"SHOP THE LOOK"}></Heading>
          <div className="flex flex-wrap justify-center ">
            <img src={blog.image1} alt={blog.title} className="w-80 h-80" />
            <img src={blog.image2} alt={blog.title} className="w-80 h-80" />
            <img src={blog.image3} alt={blog.title} className="w-80 h-80" />
            <img src={blog.image4} alt={blog.title} className="w-80 h-80" />
          </div>
          <h1 className="my-5">{blog.imageDescription}</h1>

          <div className="flex gap-3">
            <h1>Share Now:</h1>
            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <div>
                <FacebookShareCount
                  url={shareUrl}
                  className="Demo__some-network__share-count"
                >
                  {(count) => count}
                </FacebookShareCount>
              </div>
            </div>
            <div className="Demo__some-network">
              <FacebookMessengerShareButton
                url={shareUrl}
                appId="521270401588372"
                className="Demo__some-network__share-button"
              >
                <FacebookMessengerIcon size={32} round />
              </FacebookMessengerShareButton>
            </div>

            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <XIcon size={32} round />
              </TwitterShareButton>
            </div>

            <div className="Demo__some-network">
              <TelegramShareButton
                url={shareUrl}
                title={title}
                className="Demo__some-network__share-button"
              >
                <TelegramIcon size={32} round />
              </TelegramShareButton>
            </div>

            <div className="Demo__some-network">
              <WhatsappShareButton
                url={shareUrl}
                title={title}
                separator=":: "
                className="Demo__some-network__share-button"
              >
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>

            <div className="Demo__some-network">
              <LinkedinShareButton
                url={shareUrl}
                className="Demo__some-network__share-button"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-2xl font-bold my-5">RELATED ARTICLES</h1>

            <div className="grid md:grid-cols-2 gap-4">
              {blogs.slice(0, 4).map((blog) => (
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
        </div>
        <div>
          <h1 className="text-2xl border-b-2">Recent Post</h1>
          <div>
            {blogs.map((blog) => (
              <div key={blog._id} className=" my-2  border-b">
                <Link to={`/blogdetails/${blog._id}`}>
                  <h1 className=" text-xl lowercase duration-500 hover:text-[#01bad4]">
                    {blog.title}
                  </h1>
                </Link>
                <p>{blog.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
