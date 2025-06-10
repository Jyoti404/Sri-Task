import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Context/auth.jsx";
import { CartProvider } from "./Context/cart.jsx";
import { WishlistProvider } from "./Context/wishlist.jsx";
import { StyledEngineProvider } from "@mui/material/styles";
createRoot(document.getElementById("root")).render(
  
  <AuthProvider>
    <CartProvider>
    <WishlistProvider>
    <StyledEngineProvider injectFirst>
      <App />
     </StyledEngineProvider>  
    </WishlistProvider>
    </CartProvider>
  </AuthProvider>
);
