import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function BarbersList() {
  const basePath = process.env.NODE_ENV === "production" ? "/yahweh" : "";

  const barbers = [
    {
      name: "Ivan",
      nickname: "BlessedHands",
      image: "/ivan.jpg",
      bio: "Creative stylist known for unique designs and precision work. Ivan's artistic approach to hair design has made him a favorite for clients looking for something unique.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto py-8">
      {barbers.map((barber) => (
        <Card key={barber.name} className="overflow-hidden shadow-lg border-0">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={`${basePath}${barber.image}`}
                alt={barber.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                draggable={false}
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center p-8 bg-gradient-to-br from-background to-muted/50">
              <CardHeader className="pb-4">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold tracking-tight">
                    {barber.name}
                  </h3>
                  <p className="text-primary font-medium text-lg">
                    {barber.nickname}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {barber.bio}
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
