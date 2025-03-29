"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={50}
              className="h-14 w-auto"
              draggable={false}
            />
          </Link>
        </div>

        {/* Error message */}
        <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
          404
        </h1>
        <h2 className="mb-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
