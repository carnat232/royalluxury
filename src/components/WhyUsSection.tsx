import { motion } from "framer-motion";
import { Crown, ShieldCheck, Clock4, Award, Headphones, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Crown, title: "Premium Fleet Only", desc: "Every vehicle in our collection is a top-tier luxury marque, meticulously maintained." },
  { icon: ShieldCheck, title: "Fully Licensed & Insured", desc: "Complete peace of mind with comprehensive coverage on every booking." },
  { icon: Clock4, title: "Punctual & Reliable", desc: "We pride ourselves on being on time, every time — no exceptions." },
  { icon: Award, title: "Award-Winning Service", desc: "Recognised for excellence by industry leaders and thousands of happy clients." },
  { icon: Headphones, title: "24/7 Concierge Support", desc: "Dedicated support team available around the clock for any request." },
  { icon: ThumbsUp, title: "No Hidden Fees", desc: "Transparent pricing with everything included. The price you see is the price you pay." },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 bg-gradient-navy">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">The Royal Difference</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Why Choose <span className="text-gradient-gold">Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-primary/30 bg-primary/5">
              <r.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-border/30"
      >
        {[
          { value: "500+", label: "Luxury Rides" },
          { value: "98%", label: "Client Satisfaction" },
          { value: "50+", label: "Premium Vehicles" },
          { value: "24/7", label: "Availability" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhyUsSection;
