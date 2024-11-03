"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  const handleContextMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className="container relative space-y-16 px-4 pb-8">
      <section className="relative mt-2 h-[10vh]">
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <h1 className="text-center text-4xl font-bold text-black lg:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="mt-4 grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-center text-3xl font-bold md:text-left">
            About Us
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
      <section className="absolute left-0 right-0 rounded-lg bg-[#CFB991] p-8 text-center text-black">
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
