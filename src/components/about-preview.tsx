import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import { BusinessHours } from "@/components/business-hours";

export default function AboutPreview() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Yahweh&apos;s Touch
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Christian-Owned Business – Faith-driven and community-focused
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.8754280605055!2d-81.9731242!3d27.979720699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3ff7a9127183%3A0xd9d659fd2d6575f7!2s5405%20Old%20Hwy%2037%2C%20Lakeland%2C%20FL%2033811!5e0!3m2!1sen!2sus!4v1711574472023!5m2!1sen!2sus"
                width="600"
                height="600"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Yahweh's Touch Barbershop Location"
              ></iframe>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-muted-foreground">
                    5405 Old Road 37, Lakeland, Florida 33811
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-medium">Business Hours</h3>
                  <BusinessHours />
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 font-medium">
                  ✝️ Christian-Owned Business
                </h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;re proud to be a faith-driven business that serves our
                  community with integrity and excellence.
                </p>
              </div>

              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
