import { Phone, MapPin, Clock, Instagram, Facebook, Mail } from "lucide-react";
import { BusinessHours } from "@/components/business-hours";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          Contact Us
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Get in touch or visit our barbershop
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <a
                  href="tel:8633450440"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  863-345-0440
                </a>
                <a
                  href="tel:8638089880"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  863-808-9880
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Email</h3>
                <a
                  href="mailto:id@yahwehs-touch.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  id@yahwehs-touch.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Address</h3>
                <a
                  href="https://maps.google.com/?q=5405+Old+Highway+37,+Lakeland,+Florida+33811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  5405 Old Road 37, Lakeland, Florida 33811
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <Suspense fallback={<p>Loading business hours...</p>}>
                  <BusinessHours />
                </Suspense>
              </div>
            </div>

            <div>
              <h3 className="mb-2 font-medium">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/yahwehstouch"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/p/Yahwehs-Touch-Beauty-Center-100084516482622/"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="w-full overflow-hidden rounded-lg bg-muted">
              <Suspense
                fallback={
                  <div className="h-full w-full bg-muted flex items-center justify-center aspect-video">
                    Loading map...
                  </div>
                }
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.0356266863287!2d-81.97079658458046!3d28.14050798262249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd3ecaca17bb77%3A0xf28cc6e7e64e916e!2s5405%20Old%20Hwy%2037%2C%20Lakeland%2C%20FL%2033811!5e0!3m2!1sen!2sus!4v1711642524284!5m2!1sen!2sus"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yahweh's Touch Location"
                ></iframe>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
