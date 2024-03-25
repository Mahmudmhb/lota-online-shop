import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
const useBlogs = () => {
  const axiosPublic = usePublicAxios();
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/blogs`);
      return res.data;
    },
  });
  return [blogs, refetch];
};

export default useBlogs;
