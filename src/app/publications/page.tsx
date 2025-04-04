"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { featuredBooks, publicationsByYear, researchAreas } from "@/data/publications";

export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold lg:text-5xl">
        Publications
      </h1>

      {/* Research Areas */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Research Areas</h2>
        <div className="flex flex-wrap gap-2">
          {researchAreas.map((area, index) => (
            <Badge key={index} variant="secondary" className="text-sm">
              {area}
            </Badge>
          ))}
        </div>
      </div>

      {/* Featured Books/Covers */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">Featured Work</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredBooks.map((book, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-[300px] w-full md:w-1/2">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                    draggable={false}
                    onContextMenu={handleContextMenu}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="mb-2 text-xl font-semibold">{book.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {book.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Publications by Year */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">Publications by Year</h2>
        {Object.entries(publicationsByYear)
          .sort(([a], [b]) => parseInt(b) - parseInt(a))
          .map(([year, publications]) => (
            <div key={year} className="mb-8">
              <h3 className="mb-4 text-xl font-semibold">{year}</h3>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="mb-2 font-semibold">{pub.title}</h4>
                          <p className="mb-1 text-sm text-muted-foreground">
                            {pub.authors}
                          </p>
                          {pub.journal && (
                            <p className="text-sm italic text-muted-foreground">
                              {pub.journal}
                            </p>
                          )}
                        </div>
                        {pub.url && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 shrink-0"
                            asChild
                          >
                            <a
                              href={pub.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View Publication"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="sr-only">View Publication</span>
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
