"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { researchAreas } from "./research";
export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-4xl font-bold">Research</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
              Our research leverages state-of-the-art computational chemistry
              methodologies to investigate critical problems in molecular
              biology and drug discovery. Below are the primary areas of focus
              in our research group.
            </p>
          </div>
          <div className="grid gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden space-y-8 lg:block">
          <div>
            <Image
              src="/mole.webp"
              alt="Computational Chemistry Research"
              width={400}
              height={300}
              className="w-full rounded-lg bg-black object-cover"
              draggable={false}
              onContextMenu={handleContextMenu}
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Simulation of a Biomolecular Interaction
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Molecular Structure Visualization"
              width={400}
              height={400}
              className="w-full rounded-lg bg-black object-cover"
              draggable={false}
              onContextMenu={handleContextMenu}
            />
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Visualization interaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
