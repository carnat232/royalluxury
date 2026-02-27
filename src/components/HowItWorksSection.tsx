import { motion } from "framer-motion";
import { Search, CalendarCheck, Car, Smile } from "lucide-react";

const steps = [
  { icon: Search, step: "01", title: "Browse Our Fleet", desc: "Explore our curated collection of premium vehicles." },
  { icon: CalendarCheck, step: "02", title: "Choose Date & Time", desc: "Select your preferred schedule and occasion type." },
  { icon: Car, step: "03", title: "Confirm Your Booking", desc: "Receive instant confirmation with full details." },
  { icon: Smile, step: "04", title: "Enjoy The Ride", desc: "Sit back and experience true luxury on the road." },
];

const HowItWorksSection = () => (
  <section className="py-24 bg-gradient-navy">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Simple Process</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          How It <span className="text-gradient-gold">Works</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <p className="text-5xl font-display font-bold text-primary/10 mb-2">{s.step}</p>
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-primary/10 border border-primary/20 mb-4">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-bold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
