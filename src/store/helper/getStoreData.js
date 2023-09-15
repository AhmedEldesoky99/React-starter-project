import { useSelector } from "react-redux";

export const getQueryData = (itemName) => {
  const store = useSelector((state) => state);
  return store?.wrapperApi.queries[itemName]?.data?.data;
};
