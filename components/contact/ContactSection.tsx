"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Mail, MessageSquare, Send, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [method, setMethod] = useState<"email" | "whatsapp">("email");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (formData.honeypot) {
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      return;
    }

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    if (method === "whatsapp") {
      const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
      setStatus("success");
      setStatusMessage("Redirecting to WhatsApp...");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
      } else {
        const data = await response.json();
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-surface">
      <div className="container-main">
        <SectionTitle
          title="Contact"
          subtitle="Let's connect. Whether you have a research collaboration opportunity, academic inquiry, or just want to say hello."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Invitation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h3 className="heading-sm text-foreground mb-4">
              Let's Start a Conversation
            </h3>
            <p className="body-md mb-6">
              I'm always open to discussing research collaborations, academic opportunities, 
              or innovative projects in Arabic education and technology.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-soft-blue" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href="mailto:adehalimalfajri@gmail.com" className="text-sm font-medium text-foreground hover:text-soft-blue transition-colors">
                    adehalimalfajri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-soft-blue" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-soft-blue transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl bg-soft-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-soft-blue" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm font-medium text-foreground">Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field - hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-soft-blue/50 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-soft-blue/50 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-soft-blue/50 focus:border-transparent transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-soft-blue/50 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Method Selection */}
                <div className="flex gap-2 p-1 rounded-2xl bg-muted">
                  <button
                    type="button"
                    onClick={() => setMethod("email")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      method === "email"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setMethod("whatsapp")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      method === "whatsapp"
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                >
                  {isSubmitting ? "Sending..." : method === "email" ? "Send via Email" : "Send via WhatsApp"}
                </Button>

                {/* Status Message */}
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-2xl text-sm ${
                      status === "success"
                        ? "bg-success/10 text-success"
                        : "bg-error/10 text-error"
                    }`}
                  >
                    {status === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    {statusMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
