import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";

export default function ServicesPreview() {
  // Featured services
  const featuredServices = [
    { name: "Men's Haircut (13+)", price: "$30", icon: "scissors" },
    { name: "Hair Design/Graphics", price: "$8+", icon: "design" },
    { name: "Beards (Full Trim)", price: "$25", icon: "beard" },
    { name: "Boy's Haircut (12 & under)", price: "$25", icon: "child" },
  ];

  return (
    <section className="w-full bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Services & Pricing
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Quality haircuts and grooming services for everyone
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
