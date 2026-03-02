import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "2540785430626";

  const sendMessage = () => {
    if (!message.trim()) return;
    const encoded = encodeURIComponent(message.trim());
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
    setMessage("");
    setOpen(false);
  };

  return (
    <>
      {/* Chat popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl border border-border/40"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">Royal Luxury Car Hire</p>
                <p className="text-white/70 text-xs">Typically replies instantly</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat body */}
            <div className="bg-[#ECE5DD] p-4 min-h-[160px]">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800">
                  Hello! 👋 Welcome to Royal Luxury Car Hire. How can we help you today?
                </p>
                <p className="text-[10px] text-gray-400 text-right mt-1">Now</p>
              </div>
            </div>

            {/* Input */}
            <div className="bg-[#F0F0F0] px-3 py-3 flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-white rounded-full px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none border-none"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#20BD5A] transition-colors"
              >
                <Send className="h-4 w-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(!open)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <>
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary rounded-full" />
          </>
        )}
      </motion.button>
    </>
  );
};

export default WhatsAppButton;
