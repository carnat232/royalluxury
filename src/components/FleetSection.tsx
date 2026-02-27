import { motion } from "framer-motion";
import { Users, Fuel, Settings2, ArrowRight } from "lucide-react";
import carBentley from "@/assets/car-bentley.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carRangeRover from "@/assets/car-range-rover.jpg";

const cars = [
  {
    name: "Bentley Continental GT",
    category: "Grand Tourer",
    image: carBentley,
    seats: 4,
    fuel: "Petrol",
    transmission: "Automatic",
    priceFrom: "£450",
  },
  {
    name: "Mercedes-Benz S-Class",
    category: "Executive Sedan",
    image: carMercedes,
    seats: 5,
    fuel: "Hybrid",
    transmission: "Automatic",
    priceFrom: "£350",
  },
  {
    name: "Range Rover Autobiography",
    category: "Luxury SUV",
    image: carRangeRover,
    seats: 5,
    fuel: "Diesel",
    transmission: "Automatic",
    priceFrom: "£400",
  },
];

const FleetSection = () => {
  return (
    <section id="fleet" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.4em] uppercase text-sm mb-4 font-body">Our Collection</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            The <span className="text-gradient-gold">Finest</span> Fleet
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Handpicked luxury vehicles maintained to the highest standards for your comfort and prestige.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car, i) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-gradient-card border border-border/50 overflow-hidden hover:shadow-gold-lg transition-all duration-500"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-xs tracking-wider uppercase font-semibold">
                  {car.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-3">{car.name}</h3>

                <div className="flex gap-4 mb-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary" /> {car.seats}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Fuel className="h-3.5 w-3.5 text-primary" /> {car.fuel}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Settings2 className="h-3.5 w-3.5 text-primary" /> {car.transmission}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="text-xl font-display font-bold text-primary">{car.priceFrom}<span className="text-sm text-muted-foreground font-body">/day</span></p>
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center gap-2 text-sm text-primary hover:text-gold-light transition-colors group/btn"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
