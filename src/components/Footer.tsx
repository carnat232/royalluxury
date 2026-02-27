import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="py-16 bg-card border-t border-border/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Royal Luxury Car Hire" className="h-12 w-12 rounded-full object-cover border border-primary/30" />
            <div>
              <p className="font-display text-lg font-bold text-primary leading-tight">Royal Luxury</p>
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Car Hire</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The premier luxury car hire service delivering unmatched elegance and professionalism for every occasion.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Fleet", "Services", "Why Us", "Testimonials", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Our Services</h4>
          <div className="space-y-2">
            {["Wedding Cars", "Corporate Travel", "Airport Transfers", "Special Events", "Self-Drive Hire", "City Tours"].map((s) => (
              <p key={s} className="text-sm text-muted-foreground">{s}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> +1 (234) 567-890
            </a>
            <a href="mailto:info@royalluxurycarhire.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" /> info@royalluxurycarhire.com
            </a>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> 123 Mayfair Lane, London
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Royal Luxury Car Hire. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
