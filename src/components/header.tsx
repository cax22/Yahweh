"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const basePath = process.env.NODE_ENV === "production" ? "/yahweh" : "";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <Image
            src={`${basePath}/logo.png`}
            alt="Logo"
            width={140}
            height={40}
            className="h-10 w-auto"
            draggable={false}
            unoptimized
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="/barbers"
            className="text-sm font-medium hover:text-primary"
          >
            Barbers
          </Link>
          <Link
            href="/gallery"
            className="text-sm font-medium hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
        </Button>
      </div>

      {/* Mobile menu - using fixed instead of absolute for better z-index behavior */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background/98 backdrop-blur-md md:hidden transition-transform duration-300 flex flex-col",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="h-16"></div> {/* Spacer for the header */}
        <nav className="container mt-8 flex flex-col gap-4 p-4">
          <Link
            href="/"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/barbers"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Barbers
          </Link>
          <Link
            href="/gallery"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="flex h-12 items-center border-b text-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
