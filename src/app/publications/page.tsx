"use client";
import React from "react";
import { publications } from "./publications";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container mt-4 p-4">
      <h1 className="mb-8 text-center text-4xl font-bold lg:text-5xl">
        Publications
      </h1>

      <div className="mb-12 flex justify-center gap-8 xl:justify-start">
        <Image
          src="/acscover.webp"
          alt="Computational Chemistry: Principles and Applications"
          width={200}
          loading="lazy"
          height={300}
          className="rounded-lg shadow-lg"
          draggable={false}
          onContextMenu={handleContextMenu}
        />
        <Image
          src="/physicalchemistry.webp"
          alt="Drug Discovery: From Target to Clinical Trials"
          width={200}
          height={300}
          className="rounded-lg shadow-lg"
          draggable={false}
          loading="lazy"
          onContextMenu={handleContextMenu}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {publications.map((publication, index) => (
              <li
                key={index}
                className="border-b pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="mb-1 text-lg font-semibold">
                  {publication.title}
                </h3>
                <p className="mb-1 text-sm text-muted-foreground">
                  {publication.authors}
                </p>
                <p className="mb-1 text-sm italic text-muted-foreground">
                  {publication.year}
                </p>
                <p className="text-sm text-muted-foreground">
                  {publication.journal}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
