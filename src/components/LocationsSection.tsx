import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Nairobi",
  "Mombasa",
  "Nakuru",
  "Kisumu",
  "Eldoret",
  "Naivasha",
  "Malindi",
  "Meru",
];

const LocationsSection = () => (
  <section id="locations" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Where We Operate</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Our Service <span className="text-gradient-gold">Areas</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          We deliver luxury car hire services across Kenya's major cities.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {cities.map((city, i) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-6 bg-gradient-card border border-border/30 hover:border-primary/40 hover:shadow-gold text-center transition-all duration-500"
          >
            <MapPin className="h-6 w-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="font-display font-bold text-lg">{city}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationsSection;
