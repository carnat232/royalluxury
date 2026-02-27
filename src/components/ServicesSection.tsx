import { motion } from "framer-motion";
import { Car, Plane, Heart, Briefcase, PartyPopper, MapPin } from "lucide-react";

const services = [
  { icon: Heart, title: "Wedding Cars", desc: "Make your special day truly unforgettable with our decorated luxury wedding fleet." },
  { icon: Briefcase, title: "Corporate Travel", desc: "Impress clients and partners with punctual, professional executive transport." },
  { icon: Plane, title: "Airport Transfers", desc: "Seamless pickups and drop-offs at all major airports, flight tracking included." },
  { icon: PartyPopper, title: "Special Events", desc: "Red-carpet arrivals for galas, premieres, and exclusive celebrations." },
  { icon: Car, title: "Self-Drive Hire", desc: "Take the wheel of a dream car with flexible self-drive rental options." },
  { icon: MapPin, title: "City Tours", desc: "Explore iconic destinations in comfort with our curated luxury tour experiences." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">What We Offer</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Tailored <span className="text-gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Every occasion deserves the perfect vehicle. We cater to your every need with bespoke luxury.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 bg-gradient-card border border-border/30 hover:border-primary/40 hover:shadow-gold transition-all duration-500"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-display font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
