"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchAreas } from "./research";
import Image from "next/image";

export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Research</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Our research leverages state-of-the-art computational chemistry
          methodologies to investigate critical problems in molecular biology
          and drug discovery. Below are the primary areas of focus in our
          research group.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {researchAreas.map((area, index) => (
          <Card key={index} className="flex flex-col overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={area.image}
                alt={area.title}
                fill
                className="object-cover"
                onContextMenu={handleContextMenu}
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
    </div>
  );
}

