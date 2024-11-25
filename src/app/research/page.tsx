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
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Our research leverages state-of-the-art computational chemistry
          methodologies to investigate critical problems in molecular biology
          and drug discovery. Below are the primary areas of focus in our
          research group.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {researchAreas.map((area, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-[300px] w-full">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="cursor-pointer rounded-t-lg object-cover transition-transform hover:scale-105"
                onClick={() => handleImageClick(area.image)}
              />
            </div>
            <div className="flex flex-grow flex-col justify-center p-6">
              <CardHeader className="p-0">
                <CardTitle className="mb-4 text-2xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
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
