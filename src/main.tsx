import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// Providing Context
import DataProvider from "./Contexts/DataProvider.tsx";
import ToggleProvider from "./Contexts/ToggleProvider.tsx";
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById("root")!).render(
  <ToggleProvider>
    <DataProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DataProvider>
  </ToggleProvider>
);
