import { Link, useParams } from "react-router-dom";
import { useData } from "../Contexts/DataProvider";
import Loading from "../Components/Loading";
import { useEffect } from "react";
import { useCart } from "react-use-cart";

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading, Products } = useData()!;
  const Product = Products.find((p) => p.id === Number(id));
  const { addItem } = useCart();

  useEffect(() => {
    scroll(0, 0);
  });

  if (isLoading) return <Loading />;

  if (!Product) {
    // Handle the case where the product is not found
    return (
      <div className="text-center h-screen flex justify-center items-center">
        Product not found
      </div>
    );
  }

  const { image, title, price, description, category } = Product;
  return (
    <section className="container mx-auto pt-36 pb-10 md:py-36">
      <div className="w-full mx-auto xl:w-[80%] lg:w-[90%]">
        <div className="grid gap-10 md:gap-3 grid-cols-1 md:grid-cols-2 px-4 ">
          <div className="h-80 md:h-[450px]">
            <img src={image} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="h-auto md:min-h-[450px] flex flex-col gap-4 md:justify-center ">
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="text-xl text-red-900">$ {price}</p>
            <p>{description}</p>
            <div className="flex gap-4">
              <Link to="/">
                <button className="w-28 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-sm">
                  Back
                </button>
              </Link>
              <button
                className="w-28 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-sm"
                onClick={() =>
                  addItem({
                    id: id!,
                    category,
                    title,
                    price,
                    image,
                    description,
                  })
                }
              >
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
