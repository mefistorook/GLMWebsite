import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Approach from "@/pages/Approach";
import Media from "@/pages/Media";
import About from "@/pages/About";
import ConsultationFormSubmit from "@/pages/ConsultationFormSubmit";
import TenantSupportFormSubmit from "@/pages/TenantSupportFormSubmit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultation" element={<ConsultationFormSubmit />} />
            <Route path="/tenant-support" element={<TenantSupportFormSubmit />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
