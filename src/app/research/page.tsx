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
    <div className="mt-8 px-4">
      <div className="mb-8 text-center lg:text-left">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Research</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
          Our research leverages state-of-the-art computational chemistry
          methodologies to investigate critical problems in molecular biology
          and drug discovery. Below are the primary areas of focus in our
          research group.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {researchAreas.map((area, index) => (
          <Card key={index} className="flex overflow-hidden">
            <div className="flex flex-grow flex-col justify-center p-6">
              <CardHeader className="p-0">
                <CardTitle className="mb-2">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{area.description}</p>
              </CardContent>
            </div>
            <div className="flex w-1/3 min-w-[120px] items-center justify-center">
              <Image
                src={area.image}
                alt={area.title}
                width={200}
                height={200}
                className="h-full w-full object-cover"
                onContextMenu={handleContextMenu}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
