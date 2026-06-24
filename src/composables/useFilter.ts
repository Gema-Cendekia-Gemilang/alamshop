import { useQuery } from "@tanstack/vue-query";
import { getFilter } from "@/api";

const useFilter = () => {
  const { data } = useQuery({
    queryKey: ["filter"],
    queryFn: () => getFilter(),
    refetchOnWindowFocus: false,
  });

  return {
    categories: data,
  };
};

export default useFilter;
