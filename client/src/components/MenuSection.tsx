import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import menuData from "../data/menu.json";

// Type definition for Menu Item
type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular: boolean;
};

// Type definition for Menu Data
type MenuData = {
  brazilian: MenuItem[];
  turkish: MenuItem[];
  french: MenuItem[];
  american: MenuItem[];
  beverages: MenuItem[];
};

const menuItems: MenuData = menuData;

const MenuItem = ({ item }: { item: MenuItem }) => (
  <Card className="border-none shadow-none bg-white/50 hover:bg-white transition-colors duration-300 group">
    <CardHeader className="flex flex-row items-baseline justify-between p-4 pb-2">
      <div className="flex items-center gap-2">
        <CardTitle className="text-lg font-serif text-primary group-hover:text-accent transition-colors">
          {item.name}
        </CardTitle>
        {item.popular && (
          <Badge variant="secondary" className="text-[10px] h-5 px-1.5 bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
            Favorite
          </Badge>
        )}
      </div>
      <span className="font-bold text-accent">{item.price}</span>
    </CardHeader>
    <CardContent className="p-4 pt-0">
      <CardDescription className="text-muted-foreground leading-relaxed">
        {item.description}
      </CardDescription>
    </CardContent>
  </Card>
);

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="menu" className="py-20 bg-background relative overflow-hidden scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">Our Kitchen</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Explore Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A carefully curated selection of our favorite recipes passed down through generations.
          </p>
        </div>

        <Tabs 
          defaultValue="brazilian" 
          className="w-full max-w-4xl mx-auto" 
          id="menu-tabs"
          onValueChange={(value) => {
            setActiveTab(value);
            const tabsElement = document.getElementById('menu-tabs');
            if (tabsElement) {
              const yOffset = -100; // Offset to account for sticky header
              const y = tabsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({top: y, behavior: 'smooth'});
            }
          }}
        >
          <div className="flex justify-center mb-10 pb-2 px-2">
            <TabsList className="bg-transparent h-auto gap-3 flex-wrap justify-center">
              <TabsTrigger 
                value="brazilian" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Brazilian
              </TabsTrigger>
              <TabsTrigger 
                value="turkish" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Turkish
              </TabsTrigger>
              <TabsTrigger 
                value="french" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                French
              </TabsTrigger>
              <TabsTrigger 
                value="american" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Cafe Classics
              </TabsTrigger>
              <TabsTrigger 
                value="beverages" 
                className="rounded-full px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Beverages
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="brazilian" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.brazilian.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="turkish" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.turkish.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="french" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.french.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="american" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.american.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.beverages.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-[10px] text-muted-foreground uppercase leading-relaxed">
            *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH, OR EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS, ESPECIALLY IF YOU HAVE CERTAIN MEDICAL CONDITIONS.
          </p>
        </div>
      </div>
    </section>
  );
}
