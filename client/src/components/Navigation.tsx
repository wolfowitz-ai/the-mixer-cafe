import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl md:text-3xl font-bold text-primary tracking-tight">
            The Mixer <span className="text-secondary">Cafe</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#menu">
            <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Menu
            </a>
          </Link>
          <Link href="#about">
            <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Our Story
            </a>
          </Link>
          <Link href="#contact">
            <a className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Visit Us
            </a>
          </Link>
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Order Online
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          <Link href="#menu">
            <a 
              className="text-lg font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </a>
          </Link>
          <Link href="#about">
            <a 
              className="text-lg font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Story
            </a>
          </Link>
          <Link href="#contact">
            <a 
              className="text-lg font-medium text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Visit Us
            </a>
          </Link>
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Order Online
          </Button>
        </div>
      )}
    </nav>
  );
}
