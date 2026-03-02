import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import heroCar2 from "@/assets/hero-car-2.jpg";
import heroCar3 from "@/assets/hero-car-3.jpg";

const heroSlides = [
  { image: heroCar, alt: "Luxury sedan on the road" },
  { image: heroCar2, alt: "Premium SUV ready for hire" },
  { image: heroCar3, alt: "Executive Mercedes-Benz" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slideshow Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />

      {/* Slide navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-foreground/60 hover:text-primary transition-colors p-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-foreground/60 hover:text-primary transition-colors p-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentSlide ? "w-10 bg-primary" : "w-4 bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4"
          >
            ROYAL LUXURY{" "}
            <span className="text-gradient-gold">CAR HIRE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-2xl md:text-3xl font-elegant text-foreground/90 italic mb-8"
          >
            Executive Rides, Elite Experience
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed font-body"
          >
            Indulge in the finest collection of luxury vehicles, delivered with
            impeccable service for weddings, corporate events, airport transfers,
            and exclusive occasions across Kenya.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#contact"
              className="group bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-3 hover:bg-gold-light transition-colors duration-300"
            >
              Book Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:0785430626"
              className="border border-primary/50 text-primary px-8 py-4 text-sm font-semibold tracking-wider uppercase inline-flex items-center justify-center gap-3 hover:bg-primary/10 transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              Call Now
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
