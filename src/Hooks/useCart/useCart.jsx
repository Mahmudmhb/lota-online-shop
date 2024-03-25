import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";

const useCart = () => {
  const { user } = useAuth();
  const axiosPublic = usePublicAxios();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["addtocart"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/addtocart/${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
