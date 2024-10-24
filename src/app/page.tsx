"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/placeholder.svg?height=600&width=1200&text=Lab+Image+1",
  "/placeholder.svg?height=600&width=1200&text=Lab+Image+2",
  "/placeholder.svg?height=600&width=1200&text=Lab+Image+3",
];

const navItems = [
  {
    title: "About Us",
    image: "/placeholder.svg?height=200&width=300&text=About+Us",
    href: "/aboutus",
  },
  {
    title: "People",
    image: "/placeholder.svg?height=200&width=300&text=People",
    href: "/people",
  },
  {
    title: "Research",
    image: "/placeholder.svg?height=200&width=300&text=Research",
    href: "/research",
  },
  {
    title: "Publications",
    image: "/placeholder.svg?height=200&width=300&text=Publications",
    href: "/publications",
  },
  {
    title: "Teaching",
    image: "/placeholder.svg?height=200&width=300&text=Teaching",
    href: "/teaching",
  },
  {
    title: "Contact Us",
    image: "/placeholder.svg?height=200&width=300&text=Contact+Us",
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
      <header className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={images[currentImage]}
            alt={`Lab image ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
            priority
            draggable={false}
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
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
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    onContextMenu={handleContextMenu}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h2 className="text-center text-2xl font-semibold text-white">
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
