import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Book Your <span className="text-gradient-gold">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to travel in style? Contact us for a personalised quote or fill out the form below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", sub: "Available 24/7" },
              { icon: Mail, label: "Email Us", value: "info@royalluxurycarhire.com", sub: "We reply within 1 hour" },
              { icon: MapPin, label: "Visit Us", value: "123 Mayfair Lane, London", sub: "W1K 4QJ, United Kingdom" },
              { icon: Clock, label: "Working Hours", value: "24 Hours, 7 Days a Week", sub: "Including public holidays" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary/30 bg-primary/5">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                  <p className="font-display font-semibold">{c.value}</p>
                  <p className="text-sm text-muted-foreground">{c.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center bg-gradient-card border border-primary/30 p-12 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto flex items-center justify-center bg-primary/20 mb-4">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll be in touch within the hour.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-gradient-card border border-border/30 p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Full Name</label>
                    <input required className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="John Smith" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Phone</label>
                    <input required className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="+44 7XXX XXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
                  <input required type="email" className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="you@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Occasion</label>
                    <select required className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select...</option>
                      <option>Wedding</option>
                      <option>Corporate</option>
                      <option>Airport Transfer</option>
                      <option>Special Event</option>
                      <option>Self-Drive</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Preferred Date</label>
                    <input required type="date" className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Message</label>
                  <textarea rows={4} className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your requirements..." />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  Request a Quote
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
