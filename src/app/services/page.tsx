import { ServicesList } from "@/components/services-list";

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          Services & Pricing
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Quality haircuts and grooming services for everyone
        </p>

        <div className="mb-8 rounded-lg bg-muted p-4">
          <h2 className="text-lg font-medium">Tuesday Special: $12 Haircuts</h2>
          <p className="text-muted-foreground">
            Every Tuesday, enjoy our special discounted rate on standard
            haircuts.
          </p>
        </div>

        <ServicesList />
      </div>
    </main>
  );
}
