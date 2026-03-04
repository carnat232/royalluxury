import { motion } from "framer-motion";
import { AlertTriangle, Mail } from "lucide-react";

const PaymentOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md"
      style={{ pointerEvents: "all" }}
    >
      <div className="max-w-2xl mx-4 text-center px-8 py-12 border border-destructive/40 bg-card rounded-lg shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-destructive/20 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-destructive" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-destructive mb-6 leading-tight">
          ⚠️ WEBSITE TEMPORARILY SUSPENDED
        </h1>

        <p className="text-foreground text-lg mb-4 font-body">
          This website is currently unavailable due to pending developer payment.
        </p>

        <p className="text-muted-foreground mb-4">
          Access will be restored immediately once the outstanding payment has been completed.
        </p>

        <p className="text-muted-foreground mb-8">
          We kindly ask the business owner to settle the agreed development fee to reactivate full access to the website.
        </p>

        <div className="border-t border-border pt-6 mb-8">
          <p className="text-sm text-muted-foreground">
            After completing payment, please click the button below and send proof of payment to our support team. Your website will be reinstated promptly once payment is confirmed.
          </p>
        </div>

        <a
          href="mailto:marinacarnat39@gmail.com?subject=Payment%20Proof%20-%20Website%20Reactivation&body=Hi%2C%0A%0APlease%20find%20attached%20proof%20of%20payment%20for%20website%20development.%0A%0AThank%20you."
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-primary/90 transition-colors duration-300 rounded"
        >
          <Mail className="h-5 w-5" />
          Contact Support & Submit Payment Proof
        </a>
      </div>
    </motion.div>
  );
};

export default PaymentOverlay;
