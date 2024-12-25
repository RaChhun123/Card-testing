import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

// Define product type
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

interface StateContextType {
  isLoading: boolean;
  Products: Product[]; // You can further type this if you know the structure of the data
}

// Create the context with an initial value of undefined
const GlobalContext = createContext<null | StateContextType>(null);



const DataProvider = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Product[]>([]);
  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(url);
        setData(
          data.filter(({ category }: { category: string }) =>
            ["men's clothing", "women's clothing"].includes(category)
          )
        );
      } catch (e: any) {
        console.error("Error fetching data", e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <GlobalContext.Provider value={{ isLoading, Products: data }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the context value
export const useData = () => {
  const context = useContext(GlobalContext);

  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};

export default DataProvider;
