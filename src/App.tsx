import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Collections from "./pages/Collections"
import NotFound from "./pages/NotFound";
import CartDrawer from "@/components/CartDrawer";
import AboutPage from "@/pages/About"
import Contact from "@/pages/Contact"
import Cart from "@/pages/Cart";
import { HashRouter} from "react-router-dom";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
       <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/Contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />            

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CartDrawer />
   </HashRouter>
      </TooltipProvider>
    
    </AppProvider>
  </QueryClientProvider>
);

export default App;
