
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import "./App.css"; // App.cssをインポート

const queryClient = new QueryClient();

// basename設定を修正
const basename = "/";

const App = () => {
  useEffect(() => {
    // 初期化時のデバッグ情報を出力
    console.log("App component initialized");
    console.log("Current basename:", basename);
    console.log("Production mode:", import.meta.env.PROD);
    console.log("BASE_URL:", import.meta.env.BASE_URL);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
