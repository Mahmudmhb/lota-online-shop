import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const axiosPublic = usePublicAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
  });
  return [users, refetch];
};

export default useUsers;
