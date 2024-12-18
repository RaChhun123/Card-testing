import { Link } from "react-router-dom";

interface Props{
    id: number;
    image: string;
    category: string;
    title: string;
    price: number;
}
const Product = ({ id, image, category, title, price }:Props) => {
    return (
      <div key={id} className="h-[420px] sm:h-96">
        <div className=" h-2/3  p-12 border border-gray-200 shadow-sm ">
        <Link to={id.toString()} ><img src={image} alt={image} className="object-contain w-full h-full" /></Link>
        </div>
        <div className="h-1/3 px-1">
          <p className="text-sm text-gray-500 mt-2">{category}</p>
          <h3 className="font-mediumm my-2 leading-5">{title}</h3>
          <h3 className="font-medium">$ {price}</h3>
        </div>
      </div>
    );
  };

export default Product