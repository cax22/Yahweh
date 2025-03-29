import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BarberCard } from "@/components/barber-card";

export default function BarbersPreview() {
  const barbers = [
    {
      name: "Robin",
      nickname: "TheBarber",
      image: "/robin.jpg",
      bio: "Master barber specializing in classic cuts and fades. Known for attention to detail and client satisfaction.",
    },
    {
      name: "Ivan",
      nickname: "BlessedHands",
      image: "/ivan.jpg",
      bio: "Creative stylist recognized for unique designs and precision work. Creates custom styles tailored to each client.",
    },
  ];

  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Meet Our Barbers
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Skilled professionals dedicated to making you look your best
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {barbers.map((barber) => (
              <BarberCard key={barber.name} barber={barber} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/barbers">View Barber Schedules</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
