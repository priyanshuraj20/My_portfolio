import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button, Input, Textarea } from "./ui";
import { DATA } from "../constants";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // By default don't point to localhost (server was removed). Set via .env if you run a backend.
    const endpoint =
      ((import.meta as any).env?.VITE_CONTACT_ENDPOINT as string) || "";

    // EmailJS config (optional, no server required)
    const emailjsService =
      ((import.meta as any).env?.VITE_EMAILJS_SERVICE_ID as string) || "";
    const emailjsTemplate =
      ((import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID as string) || "";
    const emailjsPublic =
      ((import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY as string) || "";

    try {
      // If EmailJS is configured, use it first (no mail client or backend required)
      if (emailjsService && emailjsTemplate && emailjsPublic) {
        try {
          // Include `reply_to` so recipients can reply to the visitor's email.
          // In your EmailJS template set Reply-To to the variable `{{reply_to}}`.
          const result = await emailjs.send(
            emailjsService,
            emailjsTemplate,
            {
              from_name: formData.name,
              from_email: formData.email,
              reply_to: formData.email,
              message: formData.message,
              to_email: DATA.contact.email,
            },
            emailjsPublic
          );
          console.log("EmailJS send result:", result);

          setIsSuccess(true);
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setIsSuccess(false), 5000);
          setIsSubmitting(false);
          // Success confirmation handled by UI (no alert)
          return;
        } catch (e: any) {
          console.error("EmailJS send error:", e);
          // fallthrough to next method
        }
      }

      if (!endpoint) {
        // No endpoint configured — keep previous simulated behavior
        console.warn("VITE_CONTACT_ENDPOINT not set. Using simulated send.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        console.log("Contact endpoint:", endpoint);
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, recipient: DATA.contact.email }),
        });

        if (!res.ok) {
          const text = await res.text();
          let message = text || `Request failed with status ${res.status}`;
          try {
            const parsed = JSON.parse(text || "{}");
            if (parsed && parsed.error) message = parsed.error;
          } catch (e) {
            // ignore parse errors
          }
          throw new Error(message);
        }
      }

      // Success Logic
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      console.error("Contact form submit error:", err);
      const msg = err?.message || String(err) || "Unknown error";
      if (err instanceof TypeError) {
        // Network-level error (failed to reach EmailJS or backend)
        alert(
          "Network error: message could not be sent. Please ensure EmailJS or a backend endpoint is configured. See .env.example for setup."
        );
      } else {
        alert(`Failed to send message: ${msg}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Side */}
          <div className="md:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Let's <br />
              <span className="text-white">Connect</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              className="h-2 w-24 bg-cyan-500 rounded-full mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg mb-8"
            >
              Have a project in mind or just want to chat about AI? Drop me a
              message below.
            </motion.p>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full"
          >
            <div className="relative">
              {/* Vertical Line Decoration */}
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-cyan-500/20 rounded-full hidden md:block">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
              </div>

              <form className="space-y-8 pl-0 md:pl-8" onSubmit={handleSubmit}>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-cyan-500/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-max px-6 py-2 rounded-full border border-cyan-500 text-cyan-400 text-sm font-medium bg-black/50 backdrop-blur-sm mb-4">
                    Message
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                      Name
                    </label>
                    <Input
                      required
                      placeholder="Eg. John Doe"
                      className="bg-secondary/30 border-white/10 h-12 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-gray-600"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                      Email
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="Eg. john@example.com"
                      className="bg-secondary/30 border-white/10 h-12 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-gray-600"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Write your message here..."
                      className="bg-secondary/30 border-white/10 min-h-[150px] rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-gray-600"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="relative">
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-16 left-0 right-0 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-xl bg-white text-black hover:bg-gray-200 font-bold text-lg shadow-lg hover:shadow-cyan-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
