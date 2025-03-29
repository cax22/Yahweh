import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface BarberProps {
  barber: {
    name: string;
    nickname: string;
    image: string;
    bio: string;
  };
}

export function BarberCard({ barber }: BarberProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={barber.image || "/placeholder.svg"}
          alt={barber.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{barber.name}</h3>
          <p className="text-sm text-muted-foreground">{barber.nickname}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{barber.bio}</p>
      </CardContent>
    </Card>
  );
}
