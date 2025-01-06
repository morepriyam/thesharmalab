"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/chem2.webp", "/chem3.webp", "/chem4.webp"];

const navItems = [
  {
    title: "About Us",
    image: "/statue.webp",
    href: "/aboutus",
  },
  {
    title: "People",
    image: "/people.webp",
    href: "/people",
  },
  {
    title: "Research",
    image: "/chem1.webp",
    href: "/research",
  },
  {
    title: "Publications",
    image: "/acscover.webp",
    href: "/publications",
  },
  {
    title: "Teaching",
    image: "/teaching.webp",
    href: "/teaching",
  },
  {
    title: "Contact Us",
    image: "/mastodon.webp",
    href: "/contact",
  },
];

export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="px-50 relative h-[55vh]">
        <div className="absolute inset-0">
          <Image
            src={images[currentImage]}
            alt={`Lab image ${currentImage + 1}`}
            fill={true}
            style={{ objectFit: "cover" }}
            priority
            draggable={false}
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h1 className="mb-2 text-center text-4xl font-bold md:text-6xl">
            The Sharma Lab
          </h1>
          <p className="mb-4 text-lg md:text-xl">
            Purdue University Fort Wayne
          </p>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={prevImage}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 transform bg-white bg-opacity-50 hover:bg-opacity-75"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next image</span>
        </Button>
      </header>

      <nav className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} passHref>
              <Card className="cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill={true}
                    style={{ objectFit: "cover" }}
                    draggable={false}
                    onContextMenu={handleContextMenu}
                    className=""
                  />
                  <div className="backdrop-blur-1 absolute inset-0 flex items-center justify-center bg-black bg-opacity-15 text-2xl transition-all duration-300 hover:text-3xl">
                    <h2 className="text-center font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
