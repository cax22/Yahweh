import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function GalleryPreview() {
  const galleryImages = [
    "/g1.jpg?height=400&width=400",
    "/g2.jpg?height=400&width=400",
    "/g3.jpg?height=400&width=400",
    "/g4.jpg?height=400&width=400",
  ];

  return (
    <section className="w-full bg-muted/50 py-16 md:py-24">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              See our transformations and specialty cuts
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
