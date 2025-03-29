import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesList() {
  const services = [
    {
      category: "Men's Services",
      items: [
        { name: "Men's Haircut (13+)", price: "$30" },
        {
          name: "Men's Specialty Haircuts (Mohawk, Afro, etc.)",
          price: "$30+",
        },
        { name: "Hair Design/Graphics", price: "$8+" },
        { name: "Men's Hair Lining", price: "$10" },
        { name: "Men's Head Shave (Clippers/Razor)", price: "$35" },
        { name: "Shaves (Face)", price: "$20+" },
        { name: "Mustache Trim", price: "$5" },
        { name: "Beards (Full Trim)", price: "$25" },
      ],
    },
    {
      category: "Senior's Services",
      items: [
        { name: "Senior's Haircut (55+)", price: "$15" },
        { name: "Senior's Hair Lining", price: "$8" },
      ],
    },
    {
      category: "Children's Services",
      items: [
        { name: "Boy's Haircut (12 & under)", price: "$25" },
        { name: "Boy's Hair Lining", price: "$10" },
      ],
    },
    {
      category: "Women's Services",
      items: [
        { name: "Women's Haircuts (Back Taper)", price: "$10" },
        { name: "Women's Haircuts (Full)", price: "$30" },
        { name: "Eyebrow Arching", price: "$10+" },
      ],
    },
    {
      category: "Additional Services",
      items: [
        { name: "Shampoo", price: "$10" },
        { name: "Texturizer", price: "$20" },
        { name: "Hair Coloring (Head)", price: "$35+" },
        { name: "Hair Coloring (Beard)", price: "$25+" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {services.map((category) => (
        <Card key={category.category}>
          <CardHeader>
            <CardTitle>{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {category.items.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between py-2 transition-colors hover:bg-muted/50"
                >
                  <span className="font-medium">{service.name}</span>
                  <span className="font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
