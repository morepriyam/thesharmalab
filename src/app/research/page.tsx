"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { researchAreas } from "./research";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Research</h1>
      </div>
      <div className="space-y-8">
        {researchAreas.map((area, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col justify-center p-6 md:w-[65%]">
                <CardHeader className="p-0">
                  <CardTitle className="mb-4 text-2xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </div>
              <div className="relative h-[300px] md:h-auto md:w-[35%]">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="cursor-pointer object-cover object-center transition-transform hover:scale-105"
                  onClick={() => handleImageClick(area.image)}
                  loading="lazy"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Dialog open={!!selectedImage} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Research area"
              width={1200}
              height={900}
              className="h-auto w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
