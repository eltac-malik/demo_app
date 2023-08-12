import { useMemo } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import axios from "axios";

import { Product } from "../../components/Product";
import { Spinner } from "../Spinner";
import { ENDPOINTS } from "../../api/routing";
import { QueryId } from "../../common/constant/query";
import { IProducts } from "../../common/models";
import { initialFilter } from "../../common/redux/ProductSlice";

export const Products = () => {
  const filter = useSelector((state: any) => state.product.filter);

  const { isLoading, data: products = [] } = useQuery(
    QueryId.PRODUCT,
    () => axios.get<{ products: IProducts | any }>(ENDPOINTS.GET_PRODUCTS()),
    {
      select: (res) => res?.data?.products,
    }
  );

  const filteredProduct = useMemo(() => {
    if (filter === initialFilter) return products;
    return products.filter((product: any) => {
      return (
        product?.price >= filter.price &&
        product?.rating >= filter.rating &&
        product?.title.toLowerCase().includes(filter.title.toLowerCase())
      );
    });
  }, [filter, products]);

  return (
    <div className="products">
      {isLoading ? (
        <Spinner />
      ) : !filteredProduct.length ? (
        <p className="not-found">not found !!!</p>
      ) : (
        filteredProduct.map((product: any) => {
          return <Product product={product} />;
        })
      )}
    </div>
  );
};
