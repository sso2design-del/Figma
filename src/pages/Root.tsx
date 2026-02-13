import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { Toaster } from "../components/ui/sonner";
import { scrollToHashTarget } from "../lib/hash-scroll";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#pricing") {
      scrollToHashTarget(location.hash, "smooth");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-[#001B3D] text-white selection:bg-[#FF5812] selection:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </div>
  );
}
