import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { currentPageUrlAtom } from "./store";
import { Footer } from "@/components/Footer";

function App() {
  const location = useLocation(); // get's the url of the page
  const [_, setUrl] = useAtom(currentPageUrlAtom);
  useEffect(() => {
    setUrl(location.pathname);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
