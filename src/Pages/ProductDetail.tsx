import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { FindData } from "../Contexts/DataProvider";
import Loading from "../Components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, Product] = FindData(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loading />;

  const { image, title, price, description } = Product;
  return (
    <section className="container mx-auto my-10">
      <div className="w-full mx-auto xl:w-[80%] lg:w-[90%]">
        <div className="grid gap-10 md:gap-3 grid-cols-1 md:grid-cols-2 px-4 ">
          <div className="h-80 md:h-[450px]">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="min-h-80 md:min-h-[450px] flex flex-col gap-4 md:justify-center ">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-xl text-red-900">$ {price}</p>
            <p>{description}</p>
            <div className="flex gap-4">
              <Link to="/">
                <button className="w-28 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-sm">
                  Back
                </button>
              </Link>
              <button className="w-28 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-sm">
                Add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
