import { Toaster } from "./src/components/ui/toaster";
import { Toaster as Sonner } from "./src/components/ui/sooner";
import { TooltipProvider } from "./src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./src/components/Layout";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Experience from "./src/pages/Experience";
import Projects from "./src/pages/Projects";
import Speaking from "./src/pages/Speaking";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import NotFound from "./src/pages/NotFound";
import { ThemeProvider } from "./src/components/ThemeProvider";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="shub_theme_mode">
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/speaking" element={<Speaking />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
