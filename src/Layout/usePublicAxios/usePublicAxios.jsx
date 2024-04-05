import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://lota-online-shop.vercel.app",
});
const usePublicAxios = () => {
  return axiosPublic;
};

export default usePublicAxios;
