import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

// Define the type for the context value
interface StateContextType {
  isLoading: boolean;
  Products: any[]; // You can further type this if you know the structure of the data
}

// Create the context with an initial value of undefined
const GlobalContext = createContext<null | StateContextType>(null);

interface DataProviderProps {
  children: React.ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]); // You can replace `any` with a more specific type
  const url = "https://fakestoreapi.com/products?limit=20";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios(url);
        setData(
          data.filter(({ category }: { category: string }) =>
            ["men's clothing", "women's clothing"].includes(category)
          )
        );
      } catch (e: any) {
        console.error(e.request?.status);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [url]); // Dependency array added to avoid infinite loop

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

export const FindData = (id: any) => {
  const {isLoading, Products} = useContext(GlobalContext)!;

  const Product = Products.find(p => p.id == id);

  return [isLoading, Product];
}


export default DataProvider;
