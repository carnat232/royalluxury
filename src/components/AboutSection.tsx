import { motion } from "framer-motion";
import { Crown, Users, Car, Award } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 bg-gradient-navy">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Who We Are</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          About <span className="text-gradient-gold">Royal Luxury</span> Car Hire Services
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-lg text-muted-foreground leading-relaxed font-body">
          Royal Luxury Car Hire Services offers premium, executive, and luxury vehicles for clients who value comfort, class, and reliability. Whether it's business travel, weddings, airport transfers, or special occasions, we deliver a smooth, stylish, and unforgettable driving experience.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Crown, title: "Premium Fleet", desc: "Handpicked luxury vehicles" },
          { icon: Users, title: "Expert Chauffeurs", desc: "Professional & courteous" },
          { icon: Car, title: "Wide Selection", desc: "SUVs, sedans & more" },
          { icon: Award, title: "Trusted Service", desc: "5-star client ratings" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="text-center p-6 bg-gradient-card border border-border/30 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 mx-auto flex items-center justify-center bg-primary/10 mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
