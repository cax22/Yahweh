import Link from "next/link";
import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Yahweh&apos;s Touch Barbershop
            </h3>
            <p className="mb-2 text-muted-foreground">
              ✝️ Christian-Owned Business
            </p>
            <p className="text-muted-foreground">Look Sharp, Feel Confident</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">
                  <a href="tel:8633450440" className="hover:text-foreground">
                    863-345-0440
                  </a>{" "}
                  /{" "}
                  <a href="tel:8638089880" className="hover:text-foreground">
                    863-808-9880
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:id@yahwehs-touch.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  id@yahwehs-touch.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <a
                  href="https://maps.google.com/?q=5405+Old+Highway+37,+Lakeland,+Florida+33811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  5405 Old Road 37, Lakeland, Florida 33811
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-muted-foreground">
                  Tue-Thu: 9AM-6PM, Fri: 9AM-7PM, Sat: 9AM-6PM
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/barbers"
                className="text-muted-foreground hover:text-foreground"
              >
                Barbers
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-foreground"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>

            <div className="mt-6">
              <h4 className="mb-2 font-medium">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/yahwehstouch"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/p/Yahwehs-Touch-Beauty-Center-100084516482622/"
                  className="text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Like us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Yahweh&apos;s Touch Barbershop.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
