import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary tracking-[0.4em] uppercase text-sm mb-6 font-body font-medium"
          >
            Premium Chauffeur & Car Hire
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            Experience{" "}
            <span className="text-gradient-gold">Royalty</span>
            <br />
            On Every Journey
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed font-body"
          >
            Indulge in the finest collection of luxury vehicles, delivered with
            impeccable service for weddings, corporate events, airport transfers,
            and exclusive occasions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#fleet"
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-3 hover:bg-gold-light transition-colors duration-300"
            >
              Explore Our Fleet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-primary/50 text-primary px-8 py-4 text-sm font-semibold tracking-wider uppercase inline-flex items-center gap-3 hover:bg-primary/10 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-8 md:gap-12"
          >
            {[
              { icon: Shield, label: "Fully Insured" },
              { icon: Clock, label: "24/7 Available" },
              { icon: Star, label: "5-Star Rated" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="h-4 w-4 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
