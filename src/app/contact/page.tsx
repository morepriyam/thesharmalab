"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios, { AxiosError } from "axios";
import { contactInfo, officeHours, contactFormLabels } from "@/data/contact";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "success" | "error" | "ratelimit">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");
    
    try {
      await axios.post("/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "", honeypot: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      if (error instanceof AxiosError) {
        if (error.response?.status === 429) {
          setStatus("ratelimit");
          const resetTime = new Date(error.response.data.resetTime);
          setErrorMessage(`Too many requests. Please try again after ${resetTime.toLocaleString()}`);
        } else if (error.response?.data.errors) {
          setStatus("error");
          setErrorMessage(error.response.data.errors.join(", "));
        } else {
          setStatus("error");
          setErrorMessage("Failed to send message. Please try again.");
        }
      } else {
        setStatus("error");
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-11">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-center text-2xl font-bold lg:text-3xl">
            Find Us Here
          </h2>
          <div className="aspect-video">
            <iframe
              src={contactInfo.mapEmbedUrl}
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-center text-2xl font-bold lg:text-3xl">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Honeypot field - hidden from real users */}
            <Input
              type="text"
              name="honeypot"
              onChange={handleChange}
              value={formData.honeypot}
              style={{ display: 'none' }}
              tabIndex={-1}
              aria-hidden="true"
              autoComplete="off"
            />
            
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium">
                {contactFormLabels.name.label}
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder={contactFormLabels.name.placeholder}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                {contactFormLabels.email.label}
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder={contactFormLabels.email.placeholder}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">
                {contactFormLabels.message.label}
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder={contactFormLabels.message.placeholder}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                className="font-mono"
                disabled={status === "ratelimit"}
              >
                {contactFormLabels.submitButton}
              </Button>
            </div>
            {status === "success" && (
              <p className="text-center text-green-600">
                Message sent successfully!
              </p>
            )}
            {(status === "error" || status === "ratelimit") && (
              <p className="text-center text-red-600">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="mb-4 mt-6 text-left">
        <h1 className="mb-4 text-2xl font-bold lg:text-3xl">Contact</h1>
        <div className="font-mono text-lg text-muted-foreground">
          <h2 className="mb-2 text-2xl font-bold text-black">
            {contactInfo.name}
          </h2>
          <p>{contactInfo.department}</p>
          <p>{contactInfo.university}</p>
          <p>{contactInfo.office.room}</p>
          <p>{contactInfo.office.address}</p>
          <p>{`${contactInfo.office.city}, ${contactInfo.office.state} ${contactInfo.office.zip}`}</p>
          
          <div className="mt-6">
            <h3 className="mb-2 text-xl font-bold text-black">Office Hours</h3>
            {officeHours.map((hours, index) => (
              <p key={index}>
                {hours.day}: {hours.hours}
              </p>
            ))}
          </div>

          <div className="text-left">
            <p className="mt-6 font-mono text-muted-foreground">
              {contactInfo.contact.email}
            </p>
            <p className="mb-1 font-mono text-muted-foreground">
              {contactInfo.contact.phone}
            </p>
            <Button asChild className="font-mono">
              <a href={`mailto:${contactInfo.contact.email}`}>
                Request Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
