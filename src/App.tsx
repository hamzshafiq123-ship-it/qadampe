import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import Index from "./pages/Index";
import Content from "./pages/Content";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      // If visited before, skip loading screen
      setIsLoading(false);
    } else {
      // Mark as visited
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
        {!isLoading && (
          <>
            <CustomCursor />
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/content" element={<Content />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
