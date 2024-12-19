import { useData } from "../Contexts/DataProvider";
import Product from "../Components/Product";
import Loading from "../Components/Loading";
import { useEffect } from "react";

const ProductList = () => {
  const { isLoading, Products } = useData()!;
  
  useEffect(() => {
    scroll(0,0)
  })

  if (isLoading) return <Loading />;
  
  return (
    <section className="container mx-auto my-12 mt-28 ">
      <div className="w-full mx-auto xl:w-[80%] lg:w-[90%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 ">
          {Products.map((data) => (
            <Product {...data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
