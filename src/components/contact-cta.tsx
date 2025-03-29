import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function ContactCta() {
  return (
    <section className="w-full bg-black py-16 text-white md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready for a Fresh Look?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Visit Yahweh&apos;s Touch Barbershop for professional haircuts and
            grooming services.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/contact">Contact</Link>
            </Button>

            <a
              href="tel:8633450440"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
              aria-label="Call our main phone number"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg">863-345-0440</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
