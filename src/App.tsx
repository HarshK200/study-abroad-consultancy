import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { currentPageUrlAtom } from "./store";

function App() {
  const location = useLocation();
  const [_, setUrl] = useAtom(currentPageUrlAtom);
  useEffect(() => {
    setUrl(location.pathname);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
