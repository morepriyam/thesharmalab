"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container space-y-16 px-4 pb-8">
      <section className="relative">
        <Image
          src="/images/sharma-lab-hero.jpg"
          alt="The Sharma Lab"
          width={1200}
          height={600}
          className="h-[30vh] w-full rounded-lg object-cover"
          draggable={false}
          onContextMenu={handleContextMenu}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-center text-4xl font-bold text-white lg:text-5xl">
            About The Sharma Lab
          </h1>
        </div>
      </section>

      <section className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-center text-3xl font-bold md:text-left">
            Our Mission
          </h2>
          <p className="text-center text-lg text-muted-foreground md:text-left">
            The Sharma Lab, situated within Purdue University's Department of
            Chemistry and Biochemistry in Fort Wayne, Indiana, specializes in
            employing molecular dynamics simulations. Our primary focus is
            examining protein-protein interactions within the human immune
            system, particularly concerning chronic metabolic diseases.
          </p>
          <p className="text-lg text-muted-foreground">
            Additionally, our research spans various areas, such as
            investigating protein folding mechanisms, exploring interactions
            between ion channels and lipid membrane bilayers, virtual screening,
            and molecular docking to identify new or repurposed drugs targeting
            inflammation and immunological disorders.
          </p>
        </div>
        <Image
          src="/placeholder.svg?height=400&width=400"
          alt="Lab equipment"
          width={100}
          height={100}
          className="flex h-[40vh] w-full justify-center rounded-lg bg-black"
          draggable={false}
          onContextMenu={handleContextMenu}
        />
      </section>
      <section className="space-y-8">
        <h2 className="text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is molecular dynamics simulation?
            </AccordionTrigger>
            <AccordionContent>
              Molecular dynamics simulation is a computer simulation method for
              analyzing the physical movements of atoms and molecules. The atoms
              and molecules are allowed to interact for a fixed period of time,
              giving a view of the dynamic evolution of the system.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does your research impact human health?
            </AccordionTrigger>
            <AccordionContent>
              Our research helps in understanding the molecular mechanisms
              behind chronic metabolic diseases and immune system disorders.
              This knowledge can lead to the development of new treatments and
              drugs, potentially improving the lives of millions of people
              affected by these conditions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I collaborate with the Sharma Lab?
            </AccordionTrigger>
            <AccordionContent>
              We welcome collaborations with other researchers and institutions.
              If you're interested in collaborating, please reach out to us via
              email or through our contact form. We'll be happy to discuss
              potential research opportunities.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Join Our Research Team</h2>
        <p className="mb-6 text-lg">
          We're always looking for passionate researchers to join our team. If
          you're interested in molecular dynamics and its applications in human
          health, we'd love to hear from you.
        </p>
        <Button
          asChild
          className="bg-white font-mono text-gray-950 hover:bg-gray-200"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
