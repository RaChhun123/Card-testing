import { useToggle } from "../Contexts/ToggleProvider";
import { ArrowRight, Minus, Plus, Trash2, X } from "lucide-react";
import { useCart } from "react-use-cart";
import { useEffect } from "react";
const Sidebar = () => {
  const { setToggle, toggle } = useToggle()!;
  const {
    isEmpty,
    items,
    emptyCart,
    cartTotal,
    removeItem,
    updateItemQuantity,
    totalItems,
  } = useCart();

  // Prevent scrolling when the sidebar is open
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);

  return (
    <section>
      {/* black screen */}
      <div
        className={`${
          toggle ? "" : "hidden"
        } fixed z-40 w-screen h-screen bg-black opacity-20`}
        onClick={() => setToggle((toggle) => !toggle)}
      ></div>
      {/* Sidebar */}
      <div
        className={`${
          toggle ? "w-full md:w-[55vh] xl:w-[60vh]" : "w-0 translate-x-40"
        } fixed overflow-hidden right-0 z-50 h-screen bg-white transition-all duration-700 px-4 sm:px-5 py-2 `}
      >
        <div className="h-[10%] flex justify-between items-center">
          <p className="text-sm font-medium">SHOPPING BAG ({totalItems})</p>
          <button onClick={() => setToggle((toggle) => !toggle)}>
            <ArrowRight />
          </button>
        </div>

        {/* card list */}

        <div className="h-[65%] border-y-2 overflow-auto">
          {isEmpty ? (
            <div className="text-center mt-3">Card is Empty</div>
          ) : (
            items.map((item) => (
              <>
                <div className="h-1/3 flex gap-4 my-6 border-b-2 px-2 pb-6">
                  <div className="w-[30%]">
                    <img
                      src={item.image}
                      alt=""
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="w-[70%]">
                    <div className="h-1/2 flex justify-between items-center">
                      <p className="uppercase text-xs sm:text-sm font-normal">
                        {item.title}
                      </p>
                      <button onClick={() => removeItem(item.id)}>
                        <X
                          size={20}
                          color="#666666"
                          strokeWidth={2}
                          className="ml-10"
                        />
                      </button>
                    </div>
                    <div className="h-1/2 flex justify-between items-center">
                      <div className="flex border border-gray-400 gap-x-4 p-1">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity! - 1)
                          }
                        >
                          <Minus size={15} />
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity! + 1)
                          }
                        >
                          <Plus size={15} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500">$ {item.price}</p>
                      <p className="text-sm">
                        $ {(item.quantity! * item.price)!.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))
          )}
        </div>

        <div className="h-[25%] flex flex-col justify-around ">
          <div className="flex justify-between items-center py-2">
            <p className="text-sm font-medium">
              TOTAL: $ {cartTotal!.toFixed(2)}
            </p>
            <button
              className="text-red-600 hover:text-red-900"
              onClick={() => emptyCart()}
            >
              <Trash2 />
            </button>
          </div>
          <button className="h-12 bg-gray-300 hover:bg-gray-400">
            View cart
          </button>
          <button className="h-12 bg-gray-800 hover:bg-gray-600 text-white">
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
