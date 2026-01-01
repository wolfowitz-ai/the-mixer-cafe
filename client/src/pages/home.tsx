import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-secondary-foreground">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
