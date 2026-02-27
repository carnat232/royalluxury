import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Worthington",
    role: "CEO, Sterling Group",
    text: "Absolutely phenomenal service. The Rolls-Royce Phantom was immaculate and our chauffeur was world-class. Royal Luxury exceeded every expectation.",
    stars: 5,
  },
  {
    name: "Sophia Hartwell",
    role: "Bride",
    text: "Our wedding day was made truly magical. The Bentley was beautifully decorated and the driver was so professional and caring. I couldn't have asked for more.",
    stars: 5,
  },
  {
    name: "David Chen",
    role: "Corporate Director",
    text: "We use Royal Luxury for all our executive travel. Impeccable punctuality, pristine vehicles, and a level of discretion that our VIP clients demand.",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Client Stories</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          What Our <span className="text-gradient-gold">Clients</span> Say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-gradient-card border border-border/30 p-8 relative"
          >
            <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic font-elegant text-lg">
              "{t.text}"
            </p>
            <div>
              <p className="font-display font-bold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
