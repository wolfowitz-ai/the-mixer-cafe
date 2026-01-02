import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock Images
import img1 from "@assets/stock_images/delicious_brazilian__beaea890.jpg";
import img2 from "@assets/stock_images/turkish_coffee_with__1db7f1ed.jpg";
import img3 from "@assets/stock_images/fresh_croissant_and__97d971dc.jpg";
import img4 from "@assets/stock_images/cafe_latte_art_ec20501c.jpg";
import img5 from "@assets/stock_images/acai_bowl_with_fruit_6278dc79.jpg";

const instagramPosts = [
  { id: 1, image: img1, caption: "Fresh Pão de Queijo straight from the oven! 🇧🇷 #brazilianfood #paodequeijo" },
  { id: 2, image: img2, caption: "Afternoon pick-me-up: Turkish Coffee & Baklava. 🇹🇷 #turkishcoffee #coffeetime" },
  { id: 3, image: img3, caption: "Buttery croissants baked daily. 🥐 #frenchpastry #breakfast" },
  { id: 4, image: img4, caption: "Latte art love. ❤️ #baristalife #latteart #boyntonbeach" },
  { id: 5, image: img5, caption: "Start your day fresh with our Acai Bowls! 🫐 #healthybreakfast #acaibowl" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute inset-0 bg-secondary/5 -skew-y-3 transform origin-top-left scale-110 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-0.5 rounded-full">
                <div className="bg-white p-1.5 rounded-full">
                  <Instagram className="w-6 h-6 text-[#E1306C]" />
                </div>
             </div>
             <span className="font-serif text-xl font-bold text-primary">@themixercafe</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A glimpse into our daily creations, fresh bakes, and cafe vibes. Tag us to be featured!
          </p>
          
          <Button 
            variant="outline"
            className="rounded-full border-[#E1306C] text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all mb-10"
            onClick={() => window.open('https://www.instagram.com/themixercafe', '_blank')}
          >
            Follow on Instagram
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {instagramPosts.map((post) => (
              <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 aspect-square">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center cursor-pointer"
                       onClick={() => window.open('https://www.instagram.com/themixercafe', '_blank')}
                  >
                    <p className="text-sm font-medium line-clamp-3 mb-4">{post.caption}</p>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5 fill-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
