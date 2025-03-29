import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function BarbersList() {
  const barbers = [
    {
      name: "Robin",
      nickname: "TheBarber",
      image: "/robin.jpg",
      bio: "Master barber specializing in classic cuts and fades. Robin is known for his attention to detail and ability to create the perfect look for each client.",
    },
    {
      name: "Ivan",
      nickname: "BlessedHands",
      image: "/ivan.jpg",
      bio: "Creative stylist known for unique designs and precision work. Ivan's artistic approach to hair design has made him a favorite for clients looking for something unique.",
    },
  ];

  return (
    <div className="space-y-12">
      {barbers.map((barber) => (
        <Card key={barber.name} className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={barber.image}
                alt={barber.name}
                fill
                className="object-cover"
                draggable={false}
              />
            </div>
            <div className="flex flex-col justify-center p-6">
              <CardHeader className="pb-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">{barber.name}</h3>
                  <p className="text-muted-foreground">{barber.nickname}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p>{barber.bio}</p>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
