import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";

const useWishlist = () => {
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();
  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist/${user.email}`);
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default useWishlist;
