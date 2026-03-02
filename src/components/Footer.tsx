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
              <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Car Hire Services</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium, executive, and luxury vehicles for clients who value comfort, class, and reliability across Kenya.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Quick Links</h4>
          <div className="space-y-2">
            {["Home", "Fleet", "Gallery", "Services", "About", "Locations", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Our Services</h4>
          <div className="space-y-2">
            {["Luxury Car Hire", "Wedding Car Hire", "Corporate Transport", "Airport Transfers", "Off-road / SUV Rentals", "Self-Drive Hire"].map((s) => (
              <p key={s} className="text-sm text-muted-foreground">{s}</p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-primary mb-4">Contact</h4>
          <div className="space-y-3">
            <a href="tel:0785430626" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> 0785 430 626
            </a>
            <a href="mailto:royalluxurycarhireservices@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors break-all">
              <Mail className="h-4 w-4 flex-shrink-0" /> royalluxurycarhireservices@gmail.com
            </a>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0" /> Nairobi, Kenya
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Royal Luxury Car Hire Services. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
