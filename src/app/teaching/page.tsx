"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  currentCourses,
  teachingResources,
  teachingPhilosophy,
} from "@/data/teaching";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold">Teaching</h1>

      {/* Teaching Philosophy */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>{teachingPhilosophy.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              {teachingPhilosophy.content}
            </p>
            <ul className="ml-6 list-disc">
              {teachingPhilosophy.highlights.map((highlight, index) => (
                <li key={index} className="text-muted-foreground">
                  {highlight}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Current Courses */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">Current Courses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {currentCourses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  {course.code}: {course.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {course.semester}
                </p>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  {course.description}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Lectures: {course.schedule.lectures}</p>
                  <p>Lab: {course.schedule.lab}</p>
                  <p>Location: {course.schedule.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Teaching Resources */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {teachingResources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Button
                        asChild
                        variant="link"
                        className="h-auto p-0 text-left"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener"
                          className="inline-flex items-center"
                        >
                          {item.name}
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
