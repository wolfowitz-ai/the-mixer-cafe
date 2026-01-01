import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-20 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', 
        backgroundSize: '40px 40px' 
      }} />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <Mail className="w-12 h-12 mx-auto mb-6 text-secondary" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Join Our Family Table
        </h2>
        <p className="text-accent-foreground/80 max-w-xl mx-auto mb-8 text-lg">
          Sign up for our newsletter to receive updates on new menu items, special cultural events, and exclusive offers.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-full px-6 focus-visible:ring-secondary"
          />
          <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-12 px-8 rounded-full shadow-lg">
            Subscribe
          </Button>
        </form>
        <p className="text-xs text-accent-foreground/50 mt-4">
          We respect your privacy. No spam, just delicious updates.
        </p>
      </div>
    </section>
  );
}
