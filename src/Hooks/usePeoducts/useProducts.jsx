import usePublicAxios from "../../Layout/usePublicAxios/usePublicAxios";
import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const axiosPublic = usePublicAxios();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await axiosPublic.get("/products");
      return res.data;
    },
  });
  return [products, refetch];
};

export default useProducts;
