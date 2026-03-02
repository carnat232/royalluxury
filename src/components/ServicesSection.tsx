import { motion } from "framer-motion";
import { Car, Plane, Heart, Briefcase, Mountain, Crown } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Luxury Car Hire",
    desc: "Experience the finest rides — Mercedes-Benz, Lexus, G-Wagon, Porsche and more. Premium rentals for those who demand excellence.",
  },
  {
    icon: Heart,
    title: "Wedding Car Hire",
    desc: "Make your special day truly unforgettable with our beautifully decorated luxury wedding fleet and professional chauffeurs.",
  },
  {
    icon: Briefcase,
    title: "Corporate Executive Transport",
    desc: "Impress clients and partners with punctual, professional executive transport tailored to business needs.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Seamless pickups and drop-offs at all major airports with flight tracking and meet-and-greet service.",
  },
  {
    icon: Mountain,
    title: "Off-road / SUV Rentals",
    desc: "Explore Kenya's rugged terrains in style with our range of premium SUVs and off-road capable vehicles.",
  },
  {
    icon: Car,
    title: "Self-Drive Hire",
    desc: "Take the wheel of a dream car with flexible self-drive rental options and unlimited mileage packages.",
  },
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
          Our <span className="text-gradient-gold">Services</span>
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
