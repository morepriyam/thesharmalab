"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Google Maps Iframe */}
        <div>
          <h2 className="mb-4 text-center text-2xl font-bold">Find Us Here</h2>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13588.688229993804!2d-85.1118478!3d41.1172163!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e335ffdb499b%3A0x8046fb8a798c81da!2sScience%20Building!5e1!3m2!1sen!2sus!4v1729704015549!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="mb-4 text-center text-2xl font-bold">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message..."
              />
            </div>

            <div className="text-center">
              <Button type="submit" className="font-mono">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-4 mt-6 text-center">
        <h1 className="mb-4 text-3xl font-bold">Contact</h1>
        <div className="font-mono text-lg text-muted-foreground">
          <p>Dept. of Chemical and Biochemistry</p>
          <p>Purdue University Fort Wayne</p>
          <p>Office: Rm #484, Science Building</p>
          <p>2101 E. Coliseum Blvd.</p>
          <p>Fort Wayne, IN 46805</p>
        </div>
      </div>

      {/* Dr. Monje-Galvan's Contact Info */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold">Dr. Arjun Sharma</h2>
        <p className="font-mono text-muted-foreground">arjun.sharma@pfw.edu</p>
        <p className="mb-1 font-mono text-muted-foreground">(260) 481-6067</p>
        <Button asChild className="font-mono">
          <a href="mailto:arjun.sharma@pfw.edu">Request Appointment</a>
        </Button>
      </div>
    </div>
  );
}
