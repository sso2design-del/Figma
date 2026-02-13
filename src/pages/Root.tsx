import { Outlet } from "react-router";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { Toaster } from "../components/ui/sonner";

export default function Root() {
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
