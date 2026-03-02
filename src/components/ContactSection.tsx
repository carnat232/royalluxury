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
            Contact <span className="text-gradient-gold">Us</span>
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
              { icon: Phone, label: "Call Us", value: "0785 430 626", sub: "Available 24/7", href: "tel:0785430626" },
              { icon: Mail, label: "Email Us", value: "royalluxurycarhireservices@gmail.com", sub: "We reply within 1 hour", href: "mailto:royalluxurycarhireservices@gmail.com" },
              { icon: MapPin, label: "Service Areas", value: "Nairobi, Mombasa, Nakuru & More", sub: "Serving all major cities in Kenya" },
              { icon: Clock, label: "Working Hours", value: "24 Hours, 7 Days a Week", sub: "Including public holidays" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-primary/30 bg-primary/5">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-display font-semibold hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-display font-semibold">{c.value}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:0785430626"
                className="flex-1 bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-center hover:bg-gold-light transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="mailto:royalluxurycarhireservices@gmail.com"
                className="flex-1 border border-primary/50 text-primary px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-center hover:bg-primary/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </div>
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
                    <input required className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="07XX XXX XXX" />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Email</label>
                  <input required type="email" className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="you@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">Service</label>
                    <select required className="w-full bg-input border border-border/50 px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                      <option value="">Select...</option>
                      <option>Luxury Car Hire</option>
                      <option>Wedding Car Hire</option>
                      <option>Corporate Transport</option>
                      <option>Airport Transfer</option>
                      <option>Off-road / SUV Rental</option>
                      <option>Self-Drive Hire</option>
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
