import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const menuItems = {
  brazilian: [
    { name: "Pão de Queijo", description: "Traditional cheese bread made with cassava flour.", price: "$6.50", popular: true },
    { name: "Coxinha", description: "Shredded chicken meat covered in dough, molded into a shape resembling a drumstick.", price: "$8.00", popular: true },
    { name: "Brigadeiro", description: "Rich chocolate truffle bonbon.", price: "$3.50", popular: false },
    { name: "Açaí Bowl", description: "Pure organic açaí topped with granola, banana, and honey.", price: "$12.00", popular: false },
  ],
  turkish: [
    { name: "Simit", description: "Circular bread, typically encrusted with sesame seeds.", price: "$4.50", popular: false },
    { name: "Börek", description: "Baked filled pastries made of a thin flaky dough.", price: "$7.00", popular: true },
    { name: "Baklava", description: "Rich, sweet dessert pastry made of layers of filo filled with chopped nuts.", price: "$5.50", popular: true },
    { name: "Turkish Delight", description: "Confection based on gel of starch and sugar.", price: "$4.00", popular: false },
  ],
  french: [
    { name: "Butter Croissant", description: "Classic flaky, buttery pastry.", price: "$4.50", popular: true },
    { name: "Pain au Chocolat", description: "Sweet roll with chocolate filling.", price: "$5.00", popular: true },
    { name: "Quiche Lorraine", description: "Savoury tart with cheese and bacon lardons.", price: "$9.50", popular: false },
    { name: "Macarons", description: "Assorted flavors of delicate meringue-based cookies.", price: "$3.00/ea", popular: false },
  ],
  beverages: [
    { name: "Turkish Coffee", description: "Unfiltered coffee roasted and then finely ground.", price: "$4.50", popular: true },
    { name: "Brazilian Roast", description: "Medium roast with notes of chocolate and nut.", price: "$3.50", popular: false },
    { name: "Café au Lait", description: "Coffee with hot milk.", price: "$4.00", popular: false },
    { name: "Ayran", description: "Cold savory yogurt-based beverage.", price: "$4.00", popular: false },
  ]
};

const MenuItem = ({ item }: { item: any }) => (
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

        <Tabs defaultValue="brazilian" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-start md:justify-center mb-10 overflow-x-auto pb-2 no-scrollbar px-2">
            <TabsList className="bg-transparent h-auto gap-4 flex-nowrap">
              <TabsTrigger 
                value="brazilian" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Brazilian
              </TabsTrigger>
              <TabsTrigger 
                value="turkish" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                Turkish
              </TabsTrigger>
              <TabsTrigger 
                value="french" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
              >
                French
              </TabsTrigger>
              <TabsTrigger 
                value="beverages" 
                className="rounded-full px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-transparent data-[state=active]:shadow-lg transition-all"
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

          <TabsContent value="beverages" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.beverages.map((item, idx) => (
                <MenuItem key={idx} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground italic">
            * We also offer a selection of gluten-free and vegan options. Please ask our staff.
          </p>
        </div>
      </div>
    </section>
  );
}
