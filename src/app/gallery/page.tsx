"use client";

import ImageGallery from "@/components/gallery-grid";

export default function GalleryPage() {
  // Using basePath for GitHub Pages compatibility
  const basePath = process.env.NODE_ENV === "production" ? "/yahweh" : "";

  // Generate sequential image paths for the main gallery
  // Combining transformationImages and designImages into one array
  const mainGalleryImages = Array.from({ length: 16 }, (_, i) => {
    // First 8 images from transformationImages, next 8 from designImages
    if (i < 8) {
      return `${basePath}/transformationImages/image${i + 1}.jpg`;
    } else {
      return `${basePath}/designImages/image${i - 8 + 1}.jpg`;
    }
  });

  // Shop images with sequential naming
  const shopImages = Array.from(
    { length: 3 },
    (_, i) => `${basePath}/shopImages/image${i + 1}.jpg`
  );

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl pt-4">
        <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
          Gallery
        </h1>

        {/* Combined gallery section */}
        <div className="mb-12">
          <ImageGallery images={mainGalleryImages} columns={4} />
        </div>

        {/* Barbershop gallery section */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Our Barbershop</h2>
          <ImageGallery images={shopImages} columns={3} />
        </div>
      </div>
    </main>
  );
}
