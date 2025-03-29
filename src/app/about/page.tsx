import Image from "next/image";
import { MapPin, Clock } from "lucide-react";
import { BusinessHours } from "@/components/business-hours";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tight md:text-5xl">
          About Yahweh&apos;s Touch Barbershop
        </h1>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="relative mb-6 aspect-video overflow-hidden rounded-lg">
              <Image
                src="/fronthead.jpg?height=400&width=400"
                alt="Yahweh's Touch Barbershop"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p className="text-muted-foreground">
                  5405 Old Road 37, Lakeland, Florida 33811
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 text-2xl font-semibold">Our Story</h2>
              <p className="text-muted-foreground">
                Yahweh&apos;s Touch Barbershop is a Christian-owned business
                dedicated to providing exceptional grooming services to our
                community. Faith-driven and community-focused, we strive to make
                every client look and feel their best.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-medium">Business Hours</h3>
                <BusinessHours />
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-semibold">Our Mission</h2>
              <p className="text-muted-foreground">
                At Yahweh&apos;s Touch, we&apos;re committed to providing
                exceptional haircuts and grooming services in a welcoming
                environment. Our skilled barbers combine traditional techniques
                with modern styles to help you look sharp and feel confident.
              </p>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h3 className="mb-2 font-medium">✝️ Christian-Owned Business</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;re proud to be a faith-driven business that serves our
                community with integrity and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
