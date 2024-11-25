"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers, principalInvestigator } from "./people";
export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Our Team</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          We seek to maintain a diverse research environment that stimulates the
          professional development of our members. We highly value teamwork,
          integrity, and persistence.
        </p>
      </div>

      <div className="mb-12">
        <Card className="mx-auto max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4">
              <Image
                src={principalInvestigator.imageSrc}
                alt={principalInvestigator.name}
                width={200}
                height={200}
                className="rounded-full h-44 w-44 object-cover object-top"
                draggable={false}
                onContextMenu={handleContextMenu} 
              /> 
            </div>
            <CardTitle className="text-2xl">
              {principalInvestigator.name}
            </CardTitle>
            <p className="text-lg font-semibold text-black text-muted-foreground">
              {principalInvestigator.role}
            </p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${principalInvestigator.email}`}
                className="underline"
              >
                {principalInvestigator.email}
              </a>
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {principalInvestigator.description}
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-6 text-center text-2xl font-bold">Team Members</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex h-full flex-col">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Image
                  src={member.imageSrc}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="h-32 w-32 rounded-full object-contain"
                  draggable={false}
                  onContextMenu={handleContextMenu}
                />
              </div>
              <CardTitle>{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="text-sm text-muted-foreground">
                <a href={`mailto:${member.email}`} className="underline">
                  {member.email}
                </a>
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
