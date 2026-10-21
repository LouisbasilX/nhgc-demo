import Navbar from "@/components/layout/Navbar";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import Hero from "@/components/landing/Hero";
import Portals from "@/components/landing/Portals";
import Impact from "@/components/landing/Impact";
import Leadership from "@/components/landing/Leadership";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-20 md:pb-0">
        <Hero />
        <Portals />
        <Impact />
        <Leadership />
      </main>
      <Footer />
      <MobileBottomNav />
    </>
  );
}
