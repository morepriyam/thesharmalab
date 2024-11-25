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
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1,
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src={images[currentImage]}
            alt={`Lab image ${currentImage + 1}`}
            draggable={false}
            className="h-full w-full object-cover"
            height={600}
            width={1200}
            onContextMenu={handleContextMenu}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-center text-4xl font-extrabold drop-shadow-lg md:text-6xl">
            The Sharma Lab
          </h1>
          <p className="mt-2 text-lg font-medium md:text-xl">
            Purdue University Fort Wayne
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-40 text-white hover:bg-opacity-60"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-40 text-white hover:bg-opacity-60"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </header>

      <nav className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index} passHref>
              <Card className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="h-full w-full object-cover"
                    height={192}
                    width={384}
                    onContextMenu={handleContextMenu}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h2 className="text-center text-xl font-bold text-white">
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
