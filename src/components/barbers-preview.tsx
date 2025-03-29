import { BarberCard } from "@/components/barber-card";

export default function BarbersPreview() {
  const barbers = [
    {
      name: "Ivan",
      nickname: "BlessedHands",
      image: "/ivan.jpg",
      bio: "Creative stylist recognized for unique designs and precision work. Creates custom styles tailored to each client.",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-muted/20">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Meet Our Master Barber
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Skilled professionals dedicated to making you look your best
            </p>
          </div>

          <div className="flex justify-center">
            {barbers.map((barber) => (
              <div key={barber.name} className="w-full max-w-md">
                <BarberCard barber={barber} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
